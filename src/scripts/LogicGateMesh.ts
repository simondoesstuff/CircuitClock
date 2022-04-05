import * as THREE from "three";
import {SVGLoader} from "three/examples/jsm/loaders/SVGLoader";

/**
 *
 * @param resource
 * @param charge 0-1 value
 * @constructor
 */
export default function logicGateMesh(resource, charge: number = 1) {
    // instantiate a loader
    const paths = new SVGLoader().parse(resource).paths;

    const group = new THREE.Group();

    paths.forEach(path => {
        // first draw the strokes

        const style = path.userData.style;
        const strokeColor = style.stroke;

        if (strokeColor !== undefined && strokeColor !== 'none') {
            const material = new THREE.MeshBasicMaterial({
                color: new THREE.Color(0, 0, 0),
                side: THREE.DoubleSide,
                depthWrite: false,
            });

            path.subPaths.forEach(subPath => {
                const geometry = SVGLoader.pointsToStroke(subPath.getPoints(), style);

                if (geometry) {
                    const mesh = new THREE.Mesh(geometry, material);
                    group.add(mesh);
                }
            });
        }

        // now draw the shapes

        let color = path.color;

        color.r ??= 0;
        color.g ??= 0;
        color.b ??= 0;

        color.r *= charge;
        color.g *= charge;
        color.b *= charge;

        const material = new THREE.MeshBasicMaterial({
            color,
            side: THREE.DoubleSide,
            depthWrite: false
        });

        const shapes = path.toShapes(true);

        shapes.forEach(shape => {
            const geometry = new THREE.ShapeGeometry(shape);

            // const geometry = new THREE.ShapeGeometry(shape);
            const mesh = new THREE.Mesh(geometry, material);
            group.add(mesh);
        });
    })

    group.rotateX(Math.PI);
    return group;
}