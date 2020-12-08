---
modified: 2020-12-04T14:52:21+00:00
---

# Dimensions

## Summary
Measurement dimensions are a critically important piece of construction information. There is currently no openBIM standard for exchanging dimensions between tools. This repo is a draft proposal for adding dimensions into the BCF standard.

## Traditional annotation
Whether in the form of drawings, models, schedules, reports or other, the purpose of construction information is to communicate.

To improve communication on drawings annotation is used. The following are common types of annotation:
* Text: Display object data, including references to specifications and schedules, longer descriptive notes
* Dimensions: Distance between parts of objects.
* Tables: Such as schedules.
* Legends: Pictoral and explanatory tables.

Of these, tags, tables, and legends are possible to derive by extracting model data in a fairly unambiguous way. Generally, by extracting data from a model you are not making any new data, you're just rearranging what it already there.

However, dimensions can not be simply derived from a model and need further examination.

## Why AEC needs dimensions
3D models are great, they contain all the XYZ points of a building, so why are dimensions needed? Tools are available which can point a laser at coordinates on site, is that enough?

In the real world, no, far from it.

A raw model is not always sufficient to communicate design intent to, for example, those people building or setting out on site.

The reason is because XYZ points are *absolute* coordinates and the majority of construction is done based on *relative* measurements. I.e. Wall A is 5000mm from Wall B.

The following are some practical reasons why relative measurements are needed in the real world:
* A tape measure is faster and cheaper to set up than a laser pointer machine, and requires no GPS or aligning equipment.
* You can't stop a laser point in mid air, so it always needs to be pointed onto a background, which is not always practical or possible.
* Regulations and design guides are based on relative dimensions (e.g. The width of a door).

Without labouring the point further, I believe it can be understood by any experienced construction professional that there is an absolute fundemental need to have relative measurements between building elements and that absolute XYZ points extracted from model geometry are not enough.

## Dimensions must be specified
A tag for a piece of equipment is unambiguous. It is often simply reading a piece of data from a model. If we can show a piece of data in a tag then we can probably interrogate the model to find it too. Tags on models do not _add_ information, they generally just display data that already exists.

A dimension is different. Placing a dimension needs much more thought and for the creator to make conscious decisions.

Consider dimensioning a pipe.

The draughtsman must decide whether to dimension *from* the pipe centreline or the edge of the pipe. Then decide where to measure that dimension *to*. Is it to a wall? To the centreline of a wall? To which wall out of 100s of walls? The finish face or the structural face of that wall? Maybe to a gridline? But only to a grid that is practical because the closest gridline may be behind a wall? Or maybe it depends on the construction sequence?

This decision and logic tree of where to place a dimension in every situation is hard to codify and the inputs are highly varying depending on project and engineering requirements.

Therefore, when someone places a dimension that is an engineered piece of construction information which can not be derived from the model.

## Dimensions must be shared
The person who is responsible for creating a dimension is not the same person who is responsible for building to them, even if they are in the same team.

As described above, deciding where to place dimensions is a non-trivial and time consuming task so it would be insufficient for people to just create dimensions on the fly as and when they are needed.

Therefore, there is a requirement to not just create dimensions, but to share them between different people using different tools, for different tasks.

Interoperability is vital for dimensions.

## Existing dimension standards
IFC2x3 had an annotation schema with dimension classes, but this was removed in IFC4. I believe this was the correct decision because annotation should exist as an overlay to a model, not a fundemental part of it.

BCF 2.1 has a basic implementation of annotation, with 3D lines but nothing more.

Many 3D tools are now implementing some kind of annotation or dimensioning system, but there is almost no interoperability of these annotations between systems.

There is currently no live openBIM standard for measurements.

## Existing approaches to dimensions and dimension interoperability
For traditional drawings, dimensions are baked into PDFs or native files are exchanged. There's little to no intelligence or interoperability.

For models to have 3D dimensions, some projects have converted them into a solid object. This causes problems that if you rotate the model, you may be reading it back to front, or need to zoom in or out to read it.

With there being no IFC schema for dimensions, there is very little semantic intelligence that can be put into a solid dimension.

It also appears that vendors are struggling to understand the real world requirements for dimensions as very few tools allow for sufficient types of required dimensions to be taken.

## Proposal to extend BCF
BCF could be used to exchange a topic such as a "Work Pack", which would include multiple viewpoints of filtered parts of a model and dimensions so that a labourer could build directly from the model.

It is proposed that the BCF schema is best candidate to be extended to allow dimensions to be stored because it has all the required management capabilities already built in, as well as many existing implementations.

The WIP technical schema proposal is here: [Dimension Schema](Schema/visinfo.xsd)

[Schema documentation coming soon]

[Reference implementation coming soon]

## Use cases

### 1 Communicating a design issue
David, an M&E engineer believes the maintenance distance between a boiler and a wall is not large enough. David raises an issue in his MEP tool and creates dimensions shown.

Laura, an architect, synchronises this issue and views the dimensions in her architecture tool, adjust the spacing, which updates the dimension and synchronises the BCF. David can now inspect the new position and the new distance.

### 2 Demonstrating regularity compliance
Isabelle the architect needs to show that there is appropriate spacing around an accessible WC.

She creates a viewpoint from a model that includes all the measurements needed to show the spacings to be sent to an inspector.

### 3 Creating a Work Pack to build from
Kirsty the site engineer needs to give documentation to labourers so they can build.

In Kirsty's site office she prepares many viewpoints for a given area, analogous to viewports on a drawing sheet. Each viewport would have all the appropriate dimensions needed for the labourers to build the scope of work.

These views have been synchronised to the labourers' tablets who can now use them in the field to build.

### 4 Checking installed work
Connor the quality inspector needs to check that work has been carried out in accordance with the design.

In his site office on his desktop he navigates a 3D model and places dimensions between building elements and saves this view. He then synchronises the view to his tablet, walks out onto site and takes real world measurements and compares them to the measurements shown on his tablet.

## Not included in this proposal
The following are not in the scope of this proposal, but are possible areas of future work related to this:
* Text based notes
* Tables
* Shapes
* Symbols / icons
* Radial and angular dimensions

# Design of the specification
This initial specification is to allow the measurement between any 2 parts of object.

Parts of an object is defined as the following:
* A face: A plane defined by a point on the plane and a direction in the normal. E.g. The face of a wall, the edge of a duct, a gridline, a building storey. In essence, anything flat.
* An edge: Defined by a line and direction and passing through a point E.g. The edge of a slab of concrete, the edge of a socket, the centrelines of swept profile objects like rebar, pipes, or steel.
* A point: An XYZ point. A corner of a window. The centre point of a face or mid point of an edge.

### Note on Grid "lines"
Gridlines are not actually "lines", and should be treated as faces where the normal is the cross product between the gridline direction and the Z-axis, unless the Z-axis of the gridline is specifically defined otherwise.
