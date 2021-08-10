import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

import MVT from 'ol/format/MVT';
import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import VectorTile from 'ol/VectorTile';
import XYZ from 'ol/source/XYZ';
@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.component.html',
  styleUrls: ['./mapview.component.css']
})
export class MapviewComponent implements OnInit {
  map!: Map;

  ngOnInit(): void {
    this.map = new Map({
      view: new View({
        center: [0, 0],
        zoom: 1,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),

        // new VectorTileLayer({
        //   declutter: true,
        //   source: new VectorTileSource({
            
        //     format: new MVT(),
        //     url: 
        //     'http://localhost:3000/points/{z}/{x}/{y}.pbf'
        //   })
        // })
        new TileLayer({
          source: new XYZ({
            url:
            'http://localhost:3000/points/{z}/{x}/{y}.png'
          }),
        }),
      ],
      target: 'ol-map'
    });
  }

}
