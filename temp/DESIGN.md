---
name: Kinetic Logic
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#434656'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#737688'
  outline-variant: '#c3c5d9'
  surface-tint: '#004ced'
  primary: '#003ec7'
  on-primary: '#ffffff'
  primary-container: '#0052ff'
  on-primary-container: '#dfe3ff'
  inverse-primary: '#b7c4ff'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2e2e2'
  on-secondary-container: '#646464'
  tertiary: '#705d00'
  on-tertiary: '#ffffff'
  tertiary-container: '#caa900'
  on-tertiary-container: '#4c3f00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001452'
  on-primary-fixed-variant: '#0038b6'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1b1b1b'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#ffe170'
  tertiary-fixed-dim: '#e9c400'
  on-tertiary-fixed: '#221b00'
  on-tertiary-fixed-variant: '#544600'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display:
    fontFamily: Bricolage Grotesque
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Bricolage Grotesque
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Bricolage Grotesque
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-bold:
    fontFamily: Bricolage Grotesque
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-mono:
    fontFamily: Bricolage Grotesque
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.02em
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system is built on a "Tech-Forward Neubrutalism" aesthetic. It balances the raw, structural honesty of early web architecture with the precision of a modern high-speed ISP. The personality is confident, transparent, and high-performance.

The style utilizes high-contrast outlines, intentional offset shadows, and a strict adherence to grid-based layouts. By combining the "unrefined" elements of brutalism with a sophisticated color palette and refined typography, the design system evokes a sense of reliability and cutting-edge infrastructure.

- **Primary Motif:** Hard edges, 2px stroke weights, and 6px directional offsets.
- **Tone:** Professional yet energetic; "Speed you can see."
- **Visual Strategy:** Use heavy borders to define structural hierarchy rather than subtle shadows or gradients.

## Colors

The palette is anchored by **Deep Tech Blue**, representing connectivity and innovation. This is paired with absolute black for structural elements and a bright utility yellow for high-action callouts.

- **Primary (#0052FF):** Used for interactive states, key brand moments, and primary CTA backgrounds.
- **Secondary (#000000):** Used for all borders (2px), heavy shadows, and primary headings.
- **Tertiary (#FFD600):** A "Caution/Action" yellow used sparingly for alerts or "Best Value" badges.
- **Neutral (#F8F9FA):** The primary background color to ensure the high-contrast elements remain legible and professional.
- **Surface (#FFFFFF):** Used for card interiors and input fields to provide a clean workspace.

## Typography

This design system uses **Bricolage Grotesque** across all roles to maintain a cohesive, technical identity. The typeface’s unique ink traps and variable widths provide a "engineered" look that aligns with the ISP brand.

- **Headlines:** Use tight tracking and heavy weights. Headlines should always be black (#000000).
- **Body:** Use the Regular weight with generous line height for maximum readability on technical documentation and plan details.
- **Labels:** Use uppercase for functional UI elements like category tags or small data points to enhance the "control panel" feel.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop and a **Fluid Grid** on mobile. Elements must feel "locked" into the infrastructure.

- **Desktop (1280px+):** 12-column grid, 24px gutters, 64px side margins. 
- **Tablet (768px - 1279px):** 8-column grid, 24px gutters, 32px side margins.
- **Mobile (< 767px):** 4-column fluid grid, 16px gutters, 16px side margins.

Spacing is strictly mathematical, based on an 8px root. Avoid "soft" spacing; elements should be aligned to the stroke, ensuring that 2px borders do not create sub-pixel blurring.

## Elevation & Depth

Depth is communicated through **Hard Offsets** rather than soft shadows. This design system rejects Gaussian blurs in favor of structural clarity.

- **The "Logic Shadow":** Every elevated element (cards, buttons, dropdowns) features a 6px offset to the bottom-right.
- **Shadow Color:** Always #000000. 
- **Active State:** When an element is "pressed," the 6px shadow disappears, and the element translates 4px down and 4px right to simulate physical depression.
- **Outlines:** All containers must have a 2px solid black border. No exceptions for "ghost" or "borderless" cards.

## Shapes

The shape language is **Sharp**. This reinforces the technical, engineered nature of the service.

- **Corner Radius:** 0px for all primary UI components (Buttons, Cards, Inputs).
- **Exceptions:** Icons may have slight internal rounding to ensure legibility, but their bounding boxes and containers must remain strictly rectangular.
- **Stroke:** A consistent 2px black stroke defines the perimeter of every interactive shape.

## Components

### Buttons
- **Primary:** Deep Tech Blue background, 2px black border, white text, 6px black offset shadow.
- **Secondary:** White background, 2px black border, black text, 6px black offset shadow.
- **Interaction:** On hover, the primary button color shifts slightly darker. On click, the shadow collapses and the button shifts position.

### Cards
- **Structure:** White background, 2px black border, 6px black shadow.
- **Header:** Often separated by a 2px horizontal rule from the body content.

### Input Fields
- **Default:** White background, 2px black border, 0px roundedness.
- **Focus:** The border remains black, but a 4px Deep Tech Blue "outer glow" (non-blurred) or a thicker 4px border is applied to indicate active focus.

### Chips & Tags
- **Style:** Small rectangular boxes with 2px borders. Use Primary Blue for active filters and White for inactive. No shadows on these smaller elements to reduce visual noise.

### Progress Bars & Data
- **Visuals:** Use high-contrast "loading" segments. For speed tests, use large Display typography paired with the Tertiary Yellow for the "live" data stream.

### Checkboxes & Radios
- **Checkboxes:** Square, 2px border. When checked, use the Primary Blue fill with a thick white custom checkmark.
- **Radios:** Square (not circular) with a smaller internal square to denote selection, maintaining the neubrutalist sharp-edge theme.