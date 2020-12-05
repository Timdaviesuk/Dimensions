---
created: 2020-12-05T08:08:06+00:00
modified: 2020-12-05T23:40:46+00:00
---

# API Design Explanation

This document explains the design decisions behind this API.

## Extension to the Viewpoint object
The particular dimensions that a user needs to see on a model depends on how and where a user is looking at the model.

For dimensions to make sense, you will often have parts of a model hidden to make it clearer to see, without the clutter of unrelated objects around it.

You also need to be careful to not have too many dimensions shown at the same time, so just like a sheet has multiple views of the same part with different dimensions, it follows a model should too.

Therefore, dimensions are best kept per viewpoint.

## Dimensions property of a viewpoint
This is an area that could be changed. Initially this spec has a dimensions property attached directly to the viewpoint object for simplicity.

However, it may make more sense for there to be an additional "annotation" property, and dimensions are are property of annotations. This could make space for future expansion for other annotations, like tags, text notes, and other annotations items excluded from this specification.

I am wary of over complicating the specification at this early stage.

## Value 
Each dimension segment includes a value parameter. It is recommended that tools calculate the dimension line length and compare it to this value to ensure they match. This to ensure that a change hasn't been made to one property but not the other.

Tools should not just show this value directly.

However, this could be abused to the point that people over ride dimension values. I believe this is undesirable so it may be worth removing the "value" property.

## Dimension as a grouping object
The simplest measurement is between two objects, however, to accommodate continuous, cumulative (chain), and baseline dimensions, there needs to be a grouping mechanism.

Therefore a dimension has a GUID, and array of dimension segments. Each segment is made of two.

Possibly each DimensionSegment could have a GUID too. Worth considering.

## Model geometry referencing
In the current IFC Schema there is no stable reference to a piece of geometry. As such, this specification only allows referencing an entire IFC object.

However, the originating_geometry_ref property allows tools to save a string, which could be a reference to an internal, native geometry id. This is to enable better round tripping, and also leaves open the possibility of referencing IFC geometry in the future.

## Easier to read than to write
The approach of explicitly defining the dimension and extension lines is based on the principal that they should be easy for a tool to read and display in a viewer.

The onerous on calculating is for tools that would create the dimensions in the first place.