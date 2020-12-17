---
created: 2020-12-16T18:59:08+00:00
modified: 2020-12-17T18:43:52+00:00
---

# Implementation Guide

## Saving dimensions
Tools that create dimensions are encouraged to enter values into as many of the optional properties as possible, including dimension lines, extension lines, and dimension geometry.

This makes the display of dimensions by other tools easier to implement as they simply need to read explicitly defined coordinates.

## Displaying dimensions
At its most basic, an implemention only needs to render a set lines and text values.

At a more advanced level, if dimension geometry and associated properties are available, a viewing tool can ignore the explicit dimension lines and extension lines and display the measurements in creative ways.

Implementors are allowed and encouraged to be creative in the display of dimensions, as long as the dimension values and intended measurements are clear and unambiguous to the user.

### Display of lines
Lines are to the exact same specification as the pre-existing Line object.

However, the colour property of the dimension segment should respected where possible.

### Display of measurement value
The measurement values should be rendered in the manner of a billboard, such that the text is always facing straight onto the camera. This is to prevent the accidental reading of measurement values back to front, or even upside down, which could be the case for numbers 0, 1, 6, 8, and 9.

Th size and font of text is down to individual tools that can choose what is appropriate depending on device size, resolution, camera zoom level, selected objects etc.

The exact location of the text can also be chosen by the tool. It can be above, below, or within the line.

For continuous or offset dimensions, the text should be roughly in the middle of the dimension line.

For cumulative dimensions it should be between each end segment.

## Units
In keeping with the current BCF standard, all units are in metric metres.

The units for metric measurements should NOT be shown by default.

Implementors may provide features to convert to different units and allow the user to display the units.

Implementors may also choose to round to decimal places or significant figures.