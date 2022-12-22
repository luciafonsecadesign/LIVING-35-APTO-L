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
          "yaw": -0.08229996304742393,
          "pitch": 0.28597051491197156,
          "rotation": 6.283185307179586,
          "target": "1-cama"
        },
        {
          "yaw": -0.8365415362056101,
          "pitch": 0.2683124249507145,
          "rotation": 5.497787143782138,
          "target": "2-bao"
        },
        {
          "yaw": 0.6698675936464227,
          "pitch": 0.1567608469178534,
          "rotation": 1.5707963267948966,
          "target": "3-cocina"
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
        "yaw": 0.5114601530426022,
        "pitch": 0.611681460642501,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -0.08343797902129424,
          "pitch": 0.1070449948822052,
          "rotation": 0.7853981633974483,
          "target": "0-entrada"
        },
        {
          "yaw": -1.2158592026244097,
          "pitch": 0.1438243890322788,
          "rotation": 0,
          "target": "3-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bao",
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
          "yaw": -1.3980296795558402,
          "pitch": 0.17731224988594363,
          "rotation": 0,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-cocina",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4561097260570586,
          "pitch": 0.07649616371425161,
          "rotation": 5.497787143782138,
          "target": "0-entrada"
        },
        {
          "yaw": 2.6816722636583776,
          "pitch": 0.37901588090646854,
          "rotation": 0,
          "target": "1-cama"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "LIVING 35 Apartamento L",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
