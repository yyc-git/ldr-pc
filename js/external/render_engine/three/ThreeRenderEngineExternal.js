let Color = {
    createWithHex: (hex) => {
        return new THREE.Color(hex);
    },
    getR: (color) => {
        return color.r
    },
    getG: (color) => {
        return color.g
    },
    getB: (color) => {
        return color.b
    },
};

let Geometry = {
    createFloat32BufferAttribute: (vertices, itemSize) => {
        return new THREE.Float32BufferAttribute(vertices, itemSize);
    },
    createBufferGeometry: () => {
        return new THREE.BufferGeometry();
    },
    setIndex: (indices, bufferGeometry) => {
        bufferGeometry.setIndex(indices);
        return bufferGeometry;
    },
    setAttribute: (name, vertexAttribute, bufferGeometry) => {
        bufferGeometry.setAttribute(name, vertexAttribute);
        return bufferGeometry;
    },
    clone: (geometry) => {
        return geometry.clone();
    }
};

let RawShaderMaterial = (function () {
    let _convertColorData = (uniforms) => {
        if (!!uniforms.colors) {
            return {
                ...uniforms,
                colors: {
                    ...uniforms.colors,
                    value: uniforms.colors.value.map(([r, g, b, a]) => {
                        return new THREE.Vector4(r, g, b, a);
                    })
                }
            }
        }

        if (!!uniforms.color) {
            let [r, g, b, a] = uniforms.color.value;

            return {
                ...uniforms,
                color: {
                    ...uniforms.color,
                    value: new THREE.Vector4(r, g, b, a)
                }
            }
        }
    };

    return {
        createLineMaterial: (data) => {
            let uniforms = data.uniforms;

            return new THREE.RawShaderMaterial({
                ...data,
                uniforms: _convertColorData(uniforms)
            });
        },
        createTriangleMaterial: (data) => {
            let uniforms = data.uniforms;

            return new THREE.RawShaderMaterial({
                ...data,
                uniforms: _convertColorData(uniforms)
            });
        },
    }
})();


let LineSegments = {
    create: (geometry, material) => {
        return new THREE.LineSegments(geometry, material);
    },
    applyMatrix4: ([a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15], lineSegments) => {
        let mat4 = new THREE.Matrix4();
        mat4.set(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);

        lineSegments.applyMatrix4(mat4);
        return lineSegments;
    }
};

let Mesh = {
    create: (geometry, material) => {
        return new THREE.Mesh(geometry, material);
    },
    add: (childMesh, parentMesh) => {
        parentMesh.add(childMesh);
    },
    setCastShadow: (isCastShadow, mesh) => {
        mesh.castShadow = isCastShadow;
        return mesh;
    },
    applyMatrix4: ([a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15], mesh) => {
        let mat4 = new THREE.Matrix4();
        mat4.set(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);

        mesh.geometry.applyMatrix4(mat4);
        return mesh;
    }
};

let BoundingBox3 = {
    create: () => {
        return new THREE.Box3();
    },
    applyMatrix4: ([a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15], box3) => {
        let mat4 = new THREE.Matrix4();
        mat4.set(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);

        box3.applyMatrix4(mat4);
        return box3;
    },
    getMin: ({ min }) => {
        return [min.x, min.y, min.z];
    },
    setMin: ([x, y, z], box3) => {
        box3.min.min(new THREE.Vector3(x, y, z));
        return box3;
    },
    getMax: ({ max }) => {
        return [max.x, max.y, max.z];
    },
    setMax: ([x, y, z], box3) => {
        box3.max.max(new THREE.Vector3(x, y, z));
        return box3;
    },
    copy: (b1, b2) => {
        b2.copy(b1);
        return b2;
    },
    expandByPoint: ([x, y, z], box3) => {
        box3.expandByPoint(new THREE.Vector3(x, y, z));
        return box3;
    }
};

let Renderer = {
    render: (scene, camera, renderer) => {
        renderer.render(scene, camera);
    }
};

let THREERenderEngineExternal = {
    Color,
    Geometry,
    RawShaderMaterial,
    LineSegments,
    Mesh,
    BoundingBox3,
    Renderer
};