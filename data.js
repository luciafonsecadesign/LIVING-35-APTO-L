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
          "yaw": 0.034916351282666014,
          "pitch": 0.34444677192387196,
          "rotation": 11.780972450961727,
          "target": "3-cama"
        },
        {
          "yaw": -0.7928313976717796,
          "pitch": 0.26157199185410107,
          "rotation": 5.497787143782138,
          "target": "1-bao"
        },
        {
          "yaw": 0.6367515190099979,
          "pitch": 0.1871138152516636,
          "rotation": 7.0685834705770345,
          "target": "2-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bao",
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
        "yaw": 1.0762633152476013,
        "pitch": 0.2451756503649687,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -1.4070138083329358,
          "pitch": 0.24149561843128353,
          "rotation": 0,
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4898058738662225,
          "pitch": 0.12463246503917169,
          "rotation": 5.497787143782138,
          "target": "0-entrada"
        },
        {
          "yaw": 2.6373137250954226,
          "pitch": 0.38640559908752614,
          "rotation": 0.7853981633974483,
          "target": "3-cama"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-cama",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2595661352191136,
          "pitch": 0.19070093902710106,
          "rotation": 0,
          "target": "2-cocina"
        },
        {
          "yaw": -0.09937111458274472,
          "pitch": 0.17822263281552608,
          "rotation": 0.7853981633974483,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Apartamento L",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
