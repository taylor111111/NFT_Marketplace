import * as THREE from 'three';

import { TWEEN } from 'three/examples/jsm/libs/tween.module.min.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

class ImageStage {
  camera;
  scene;
  renderer; 
  controls;
  mount;
  objects = [];
  defaultPosition = [];
  imgObj = [];
  imgRotation = -0.23356108369490713; 

  setImgObj = (imgObj) => {
    this.imgObj = imgObj;
  }

  setMount = (mount) => {
    this.mount = mount;
  }

  transform = ( targets, duration ) => {

    TWEEN.removeAll();

    for ( let i = 0; i < this.objects.length; i ++ ) {

      const object = this.objects[ i ];
      const target = targets[ i ];
      
      new TWEEN.Tween( object.position )
        .to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
        .easing( TWEEN.Easing.Exponential.InOut )
        .start();

      new TWEEN.Tween( object.rotation )
        .to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
        .easing( TWEEN.Easing.Exponential.InOut )
        .start();

    }

    new TWEEN.Tween( this )
      .to( {}, duration * 2 )
      .onUpdate( this.render )
      .start();
  }

  render = () => {
    this.renderer.render( this.scene, this.camera );
  }

  animate = () => {
  
      requestAnimationFrame( this.animate );

      TWEEN.update();

    // this.controls.update();
  }

  onWindowResize = () => {

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize( window.innerWidth, window.innerHeight );

    this.render();

  }
 
  buildList = () => {
    for ( let i = 0; i < this.imgObj.length; i++ ) {

      const element = this.imgObj[i];

      const objectCSS = new CSS3DObject( element );
      objectCSS.position.x = Math.random() * 4000 - 2000;
      objectCSS.position.y = Math.random() * 4000 - 2000;
      objectCSS.position.z = Math.random() * 4000 - 2000;
      objectCSS.rotation.copy(new THREE.Euler(Math.random(), Math.random(), Math.random()));
      
      this.scene.add( objectCSS );

      this.objects.push( objectCSS );

      this.defaultPosition.push(this.createPosition(i === 0, i));
      //
    }
  }

  createPosition = (isFirst, p) => {
    const object = new THREE.Object3D();
    object.position.x = p * 500;
    object.position.y = 0;
    if(isFirst) {
      object.rotation.y = 0 - this.imgRotation;
      object.position.z = 1000;
      object.position.x = -100;
    } else {
      object.rotation.y = this.imgRotation;
    }
    return object;
  }

  /******************************
    i:   0      1      2       3
    p:   2      3      first   1
   ************************* * */
  scrollExe(first) {
    // p = (i + len - first) % len
    const target = [];
    for(let i = 0; i < this.imgObj.length; i++ ) {
      const p = (i + this.imgObj.length - first) % this.imgObj.length;
      target.push( this.createPosition(i === first, p) );
    }
    this.transform( target, 2000 );
    
  }

  setCamera = () => {
    this.camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
    this.camera.position.z = 3000;
  }

  setScene = () => {
    this.scene = new THREE.Scene();
  }

  setRenderer = () => {
    this.renderer = new CSS3DRenderer();
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    if(!!this.mount) {
      while (this.mount.firstChild) {
        this.mount.removeChild(this.mount.firstChild);
      }

      this.mount.appendChild( this.renderer.domElement );
    }
  }

  setControls = () => {
    this.controls = new TrackballControls( this.camera, this.renderer.domElement );
    this.controls.minDistance = 500;
    this.controls.maxDistance = 6000;
    this.controls.addEventListener( 'change', this.render );
  }
  

  init = () => {
    this.setCamera();
    this.setScene();
    this.buildList();
    this.setRenderer();
    // this.setControls();
    this.transform( this.defaultPosition, 2000 );

    //
    window.addEventListener( 'resize', this.onWindowResize );
  }
}

export default ImageStage;
