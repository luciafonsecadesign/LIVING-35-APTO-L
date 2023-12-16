var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.621511255236511,
          "pitch": 0.1049865021478098,
          "rotation": 5.497787143782138,
          "target": "3-bao"
        },
        {
          "yaw": -0.04786867304152054,
          "pitch": 0.2709233063413965,
          "rotation": 11.780972450961727,
          "target": "1-cama"
        },
        {
          "yaw": 0.6006707300926131,
          "pitch": 0.17123056111094392,
          "rotation": 7.0685834705770345,
          "target": "2-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cama",
      "name": "Cama",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.28039202178234035,
        "pitch": 0.4523638115159141,
        "fov": 1.405674899209756
      },
      "linkHotspots": [
        {
          "yaw": -2.1537857313261792,
          "pitch": 0.0712367292442444,
          "rotation": 5.497787143782138,
          "target": "2-cocina"
        },
        {
          "yaw": -1.0255703284589988,
          "pitch": 0.07010579594084909,
          "rotation": 0.7853981633974483,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cocina",
      "name": "Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.01588310955656347,
        "pitch": -0.023949899986535073,
        "fov": 1.336934065012412
      },
      "linkHotspots": [
        {
          "yaw": 1.2874498074985343,
          "pitch": 0.11961482578256799,
          "rotation": 6.283185307179586,
          "target": "0-entrada"
        },
        {
          "yaw": 2.306814277262065,
          "pitch": 0.4558873593068675,
          "rotation": 0,
          "target": "1-cama"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bao",
      "name": "Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3308268464838626,
          "pitch": -0.06201360971632752,
          "rotation": 0,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "LIVING 35 - L",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
