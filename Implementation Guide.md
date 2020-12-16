---
created: 2020-12-16T18:59:08+00:00
modified: 2020-12-16T20:39:09+00:00
---

# Implementation Guide

## Saving dimensions
Tools that create dimensions are encouraged to enter values into as many of the optional properties as possible, including dimension lines, extension lines, and dimension geometry.

This makes the display of dimensions by other tools more accurate and easier to implement.

## Displaying dimensions
At its most basic, an implemention only needs to render a set lines and text values.

At a more advanced level, if dimension geometry and associated properties are available, a viewing tool could ignore the explicit dimension lines and extension lines and display the measurements in creative ways.

Implementors are allowed and encouraged to be creative in the display of dimensions, as long as the dimension values and intended measurement are clear to the user.

### Display of lines
Lines are to the exact same specification as the pre-existing Line object.

However, the colour property of the dimension segment should respected where possible.

## Display of text
The text values should be rendered in the manner of a billboard, such that the text is always facing straight onto the camera.

Th size and font of text is down to individual tools that can choose what is appropriate depending on device size, resolution, camera zoom level, selected objects etc.

## Levels of implementation

There are many optional parts to allow for easy implementation. The approximate levels of implementation complexity are the following:

1. Minimum level: Dimension line and value
2. Extension lines: Dimension line and extension lines are shown
3. Dimension Geometry: The dimension is aware of whether it is connected to a face, line or point.
4. Associative: Using the reference_geometry_id the dimensions are attached to objects, and when the object moves, so does the dimension position and value.

These are not formal levels but are intended as a guide for implementers.

## Display of dimensions
.

## Display of dimension values
The dimension value should always be rendered in the appropriate place.

The exact location and display of the dimension value is left to the implementation.

## Over-riding dimension lines and extension lines
Implementers may override the exact 

## Possible display scenarios