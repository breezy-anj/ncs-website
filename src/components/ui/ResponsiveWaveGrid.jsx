import React from "react";

/**
 * Checks if a React element represents a card.
 */
function isCardElement(element) {
  if (!React.isValidElement(element)) return false;
  const cls = element.props?.className || "";
  return cls.includes("h-[600px]") && cls.includes("w-[200px]");
}

/**
 * Recursively extracts all card elements from children.
 */
function extractCards(children) {
  const cards = [];
  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    if (isCardElement(child)) {
      cards.push(child);
    } else if (child.props?.children) {
      cards.push(...extractCards(child.props.children));
    }
  });
  return cards;
}

/**
 * ResponsiveWaveGrid
 * - Desktop (md+): Renders children untouched in their original Figma desktop layout.
 * - Mobile (<md): Switches the grid pattern into 3-card wave rows with reduced vertical spacing.
 *   - When 3 cards are in a row, the middle card is shifted up.
 *   - When 1 or 2 cards are left in the last row, they are centered in the mobile view.
 *   - Hover animations on mobile are disabled.
 *   - The content inside every card remains 100% intact.
 */
export default function ResponsiveWaveGrid({ children }) {
  const cards = extractCards(children);

  // Group cards into rows of up to 3 cards
  const rows = [];
  for (let i = 0; i < cards.length; i += 3) {
    rows.push(cards.slice(i, i + 3));
  }

  return (
    <>
      {/* ========================================================
          1. MOBILE VIEW: CHUNKED ROWS (CENTERED LAST ROWS & TIGHT GAP)
      ======================================================== */}
      <div className="flex flex-col gap-y-1 sm:gap-y-2 items-center w-full max-w-[375px] mx-auto px-1 pt-10 md:hidden select-none">
        {rows.map((rowCards, rowIndex) => (
          <div
            key={rowIndex}
            className="flex items-start justify-center gap-x-2 w-full"
          >
            {rowCards.map((child, colInRow) => {
              // Wave shift pattern:
              // For 3-card rows: middle card is shifted up significantly (-mt-10), side cards down (mt-6)
              // For 2-card rows: centered, level
              // For 1-card rows: centered
              let shiftClass = "mt-0";
              if (rowCards.length === 3) {
                shiftClass = colInRow === 1 ? "-mt-10" : "mt-6";
              } else if (rowCards.length === 2) {
                shiftClass = "mt-2";
              }

              // Strip desktop layout margins and convert 'group' to 'md:group' to disable mobile hover
              const cleanClassName = (child.props?.className || "")
                .replace(/\bml-\[[^\]]+\]/g, "")
                .replace(/\bmt-\[[^\]]+\]/g, "")
                .replace(/\bmt-0\b/g, "")
                .replace(/\bml-0\b/g, "")
                .replace(/\bcol-1\b/g, "")
                .replace(/\brow-1\b/g, "")
                .replace(/\bgroup\b/g, "md:group")
                .trim();

              const mobileChild = React.cloneElement(child, {
                className: `${cleanClassName} !ml-0 !mt-0 !col-auto !row-auto`,
              });

              return (
                <div
                  key={colInRow}
                  className={`w-[108px] h-[315px] shrink-0 flex items-start justify-center ${shiftClass}`}
                >
                  <div className="w-[200px] h-[600px] shrink-0 origin-top scale-[0.54]">
                    {mobileChild}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* ========================================================
          2. DESKTOP VIEW: ORIGINAL FIGMA LAYOUT (UNTOUCHED)
      ======================================================== */}
      <div className="hidden md:contents">
        {children}
      </div>
    </>
  );
}
