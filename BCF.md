---
created: 2020-12-04T16:09:30+00:00
modified: 2020-12-05T07:24:42+00:00
---

# BCF

### New objects
dimension.json
dimension_segment.json
dimension_geometry.json
face.json


### 4.5.9 GET Dimensions Service
**Resource URL**

    GET /bcf/{version}/projects/{project_id}/topics/{guid}/viewpoints/{guid}/dimensions

[dimensions_GET.json](Schemas_draft-03/Collaboration/Viewpoint/dimension_GET.json)

Retrieve a **collection** of all dimensions in a viewpoint.

**Example Request**

    GET /bcf/2.1/projects/F445F4F2-4D02-4B2A-B612-5E456BEF9137/topics/B345F4F2-3A04-B43B-A713-5E456BEF8228/viewpoints/a11a82e7-e66c-34b4-ada1-5846abf39133/dimensions

**Example Response**

    Response Code: 200 - OK
    Body:
    {
        "dimension": [
            {
                "guid": "2MF28NhmDBiRVyFakgdbCT",
                "originating_system": "Example CAD Application",
                "authoring_tool_id": "EXCAD/v1.0"
                "segments" : [{
                    "color": (rgb, like coloured objects)
                    "start_geometry": {
                        "ifc_guid": "",
                        "type": ("point", "line", "plane"),
                        "geometry": (point, line, plane)
                    }
                    "start_extension_line": Line
                    "end_extension_line": Line
                    "end_geometry": {}
                    "value": 1000,
                    "dimension_line": Line
                ]
            },
        ]
    }