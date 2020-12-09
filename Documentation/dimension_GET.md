---
created: 2020-12-04T16:09:30+00:00
modified: 2020-12-05T14:16:21+00:00
---

# dimension_get.md

### New objects
dimension.json
dimension_segment.json
dimension_geometry.json

### 4.5.9 GET Dimensions Service
**Resource URL**

    GET /bcf/{version}/projects/{project_id}/topics/{guid}/viewpoints/{guid}/dimensions

[dimensions_GET.json](dimension.json)

Retrieve a **collection** of all dimensions in a viewpoint.

**Example Request**

    GET /bcf/2.1/projects/F445F4F2-4D02-4B2A-B612-5E456BEF9137/topics/B345F4F2-3A04-B43B-A713-5E456BEF8228/viewpoints/a11a82e7-e66c-34b4-ada1-5846abf39133/dimensions

**Example Response**

    Response Code: 200 - OK
    Body:
    {
        "dimensions": [
            {
                "dimension_type": "Continuous",
                "guid": "1c3c4d9a-9c36-48f9-a564-d85455a097c2",
                "originating_system": "DimTool",
                "authoring_tool_id": "2566",
                "dimension_segments" : [{
                    "guid": "f7ba6797-ec80-4fd2-be63-29068501a3e0",
                    "color": "#FFFFFF00",
                    "value": 1000,
                    "start_extension_line": {
                        "start_point": { "x": 0, "y": 0, "z": 0},
                        "end_point": { "x": 0, "y": 0, "z": 1000}
                    },
                    "end_extension_line": {
                        "start_point": { "x": 1000, "y": 0, "z": 0},
                        "end_point": { "x": 1000, "y": 0, "z": 1000}
                    },
                    "dimension_line": {
                        "start_point": { "x": 0, "y": 0, "z": 1000},
                        "end_point": { "x": 1000, "y": 0, "z": 1000}
                    },
                    "start_geometry": {
                        "component": {
                            "ifc_guid": "1E8YkwPMfB$h99jtn_uAjI"
                        },
                        "point": { "x": 0, "y": 0, "z": 0},
                        "geometry_id": "2a4iof4:4a4ggts:44r4rr4"
                    },
                    "end_geometry": {
                        "component": {
                            "ifc_guid": "1mrgg_O_bBBv_tvdtVwK59"
                        },
                        "line": {
                            "start_point": { "x": 1000, "y": 0, "z": -1000},
                            "end_point": { "x": 1000, "y": 0, "z": 5000}
                        },
                        "geometry_id": "8n3mobg:mf894jk:fnw035f"
                    }
                ]
            }
        ]
    }
