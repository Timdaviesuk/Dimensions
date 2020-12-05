---
created: 2020-12-05T08:08:06+00:00
modified: 2020-12-05T14:15:23+00:00
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

## Explicit vs parameter driven dimension style
The specification explicitly defines different the extension lines

## Value 

## Dimension as a grouping object
The simplest measurement is between two objects, however, to accommodate continuous, cumulative (chain), and baseline dimensions, there needs to be a grouping mechanism.

Therefore a dimension has a GUID, and array of dimension segments. Each segment is made of two

## Model geometry referencing
In the current IFC Schema there is no stable reference to a piece of geometry. As such, this specification only allows