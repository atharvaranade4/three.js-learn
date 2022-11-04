import './style.css'
import * as THREE from 'three'
import { BlendingEquation, Mesh } from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)

//CHANGE POSITION
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;
mesh.position.set(0.7, -0.6, 1)

//CHANGE SCALE
// mesh.scale.x = 1
// mesh.scale.y = 1
// mesh.scale.z = 0.5
mesh.scale.set(2, 0.5, 0.5)


// CHANGE ROTATION
mesh.rotation.reorder('XYZ')
mesh.rotation.x = Math.PI*0.25
mesh.rotation.y = Math.PI*0.25
//mesh.rotation.z = Math.PI*0.75


// QUATERNION
// *** Quaternion change affects rotation and vice versa



// Put objects inside group and use posotion, rotation and scale on that group
// ONE GROOUP WITH THREE CUBES
const group = new THREE.Group();
group.position.y = 1
group.scale.y = 2
group.rotation.y = 1

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 'blue'})
)
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 'green'})
)
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 'yellow'})
)
cube2.position.x = -2
cube3.position.x = 2
group.add(cube1, cube2, cube3)



scene.add(group)
scene.add(mesh)

//axis helper
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

console.log(mesh.position.length())



/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
//camera.position.x = 1
//camera.position.y = 1
camera.position.z = 4

scene.add(camera)

// camera.lookAt(new THREE.Vector3(3,0,0))
// camera.lookAt(mesh.position)


// mesh.position.normalize(camera.position)
console.log(mesh.position.distanceTo(camera.position))

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)