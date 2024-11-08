import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const LaptopConcept = (props) =>{
  const { nodes, materials } = useGLTF('/models/laptop_concept.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, -6.967, -0.651]}>
          <group position={[15.97, 4.007, 0.024]}>
            <group position={[-31.459, -8.674, -0.191]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_6.geometry}
                material={materials['Mat.6']}
                position={[15.49, 11.635, 0.818]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_8.geometry}
                material={materials['Mat.6']}
                position={[15.49, 11.635, 0.818]}
              />
            </group>
            <group position={[-31.459, -8.674, -0.191]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_11.geometry}
                material={materials['Mat.9']}
                position={[15.49, 11.635, 0.818]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_13.geometry}
                material={materials['Mat.8']}
                position={[15.49, 11.635, 0.818]}
              />
            </group>
          </group>
          <group position={[-0.032, 6.516, -0.053]} rotation={[-1.749, 0, 0]}>
            <group position={[0.064, -0.143, -0.046]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_17.geometry}
                material={materials['Mat.5']}
                position={[-0.032, -0.63, 0.365]}
                rotation={[1.749, 0, 0]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_20.geometry}
              material={materials['Mat.4']}
              position={[0.032, -0.773, 0.319]}
              rotation={[1.749, 0, 0]}
            />
          </group>
          <group position={[0.032, -6.516, 0.053]}>
            <group position={[-15.522, 1.848, -0.219]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_24.geometry}
                material={materials['Mat.4']}
                position={[15.49, 11.635, 0.818]}
              />
            </group>
            <group position={[-15.522, 1.848, -0.219]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_27.geometry}
                material={materials['Mat.4']}
                position={[15.49, 11.635, 0.818]}
              />
            </group>
            <group position={[-15.522, 1.848, -0.219]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_30.geometry}
                material={materials.material_0}
                position={[15.49, 11.635, 0.818]}
              />
            </group>
            <group position={[-19.294, 8.462, -0.34]}>
              <group position={[0.044, -0.403, 0.023]}>
                <group position={[0, 2.895, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_35.geometry}
                    material={materials['Mat.9']}
                    position={[19.218, 2.529, 0.916]}
                  />
                </group>
                <group position={[0, 0.537, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_38.geometry}
                    material={materials['Mat.9']}
                    position={[19.218, 4.887, 0.916]}
                  />
                </group>
                <group position={[0, -2.56, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_41.geometry}
                    material={materials['Mat.9']}
                    position={[19.218, 7.983, 0.916]}
                  />
                </group>
                <group position={[0, -0.872, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_44.geometry}
                    material={materials['Mat.9']}
                    position={[19.218, 6.296, 0.916]}
                  />
                </group>
                <group position={[38.414, 2.265, 0]} rotation={[0, 0, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_47.geometry}
                    material={materials['Mat.9']}
                    position={[19.196, -3.159, 0.916]}
                    rotation={[0, 0, -Math.PI]}
                  />
                </group>
                <group position={[38.414, -0.255, 0]} rotation={[0, 0, -Math.PI]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_50.geometry}
                    material={materials['Mat.9']}
                    position={[19.196, -5.679, 0.916]}
                    rotation={[0, 0, -Math.PI]}
                  />
                </group>
              </group>
              <group position={[0.044, -2.351, 0.023]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_53.geometry}
                  material={materials['Mat.7']}
                  position={[19.218, 7.371, 0.916]}
                />
              </group>
              <group position={[0.044, 2.492, 0.023]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_56.geometry}
                  material={materials['Mat.7']}
                  position={[19.218, 2.529, 0.916]}
                />
              </group>
              <group position={[38.476, 1.899, 0.023]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_59.geometry}
                  material={materials['Mat.9']}
                  position={[19.218, 2.529, 0.916]}
                />
              </group>
              <group position={[38.476, -0.618, 0.023]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_62.geometry}
                  material={materials['Mat.9']}
                  position={[19.218, 4.887, 0.916]}
                />
              </group>
            </group>
          </group>
          <group position={[-11.241, -5.024, 0.079]}>
            <group position={[-1.532, 0.755, 0.004]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_66.geometry}
                material={materials['Mat.2']}
                position={[12.773, 11.236, 0.568]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_68.geometry}
                material={materials['Mat.2']}
                position={[12.773, 11.236, 0.568]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_70.geometry}
                material={materials['Mat.2']}
                position={[12.773, 11.236, 0.568]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_72.geometry}
                material={materials['Mat.2']}
                position={[12.773, 11.236, 0.568]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_74.geometry}
                material={materials['Mat.2']}
                position={[12.773, 11.236, 0.568]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_76.geometry}
                material={materials['Mat.2']}
                position={[12.773, 11.236, 0.568]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_78.geometry}
                material={materials['Mat.2']}
                position={[12.773, 11.236, 0.568]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_80.geometry}
                material={materials['Mat.2']}
                position={[12.773, 11.236, 0.568]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_82.geometry}
                material={materials['Mat.2']}
                position={[12.773, 11.236, 0.568]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_84.geometry}
                material={materials['Mat.2']}
                position={[12.773, 11.236, 0.568]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_86.geometry}
                material={materials['Mat.2']}
                position={[12.773, 11.236, 0.568]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_88.geometry}
                material={materials['Mat.2']}
                position={[12.773, 11.236, 0.568]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_90.geometry}
                material={materials['Mat.2']}
                position={[12.773, 11.236, 0.568]}
              />
            </group>
            <group position={[-1.532, 0.755, 0.004]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_93.geometry}
                material={materials['Mat.2']}
                position={[12.773, 11.236, 0.568]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_95.geometry}
                material={materials['Mat.2']}
                position={[12.773, 11.236, 0.568]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_97.geometry}
                material={materials['Mat.2']}
                position={[12.773, 11.236, 0.568]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_99.geometry}
                material={materials['Mat.2']}
                position={[12.773, 11.236, 0.568]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_101.geometry}
                material={materials['Mat.2']}
                position={[12.773, 11.236, 0.568]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_103.geometry}
                material={materials['Mat.2']}
                position={[12.773, 11.236, 0.568]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_105.geometry}
                material={materials['Mat.2']}
                position={[12.773, 11.236, 0.568]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_107.geometry}
                material={materials['Mat.2']}
                position={[12.773, 11.236, 0.568]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_109.geometry}
                material={materials['Mat.2']}
                position={[12.773, 11.236, 0.568]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_111.geometry}
                material={materials['Mat.2']}
                position={[12.773, 11.236, 0.568]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_113.geometry}
                material={materials['Mat.2']}
                position={[12.773, 11.236, 0.568]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_115.geometry}
                material={materials['Mat.2']}
                position={[12.773, 11.236, 0.568]}
              />
            </group>
            <group position={[-3.283, 0.955, 0.004]}>
              <group position={[8.293, -2.46, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_119.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
              <group position={[10.552, -2.46, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_122.geometry}
                  material={materials['Mat.2']}
                  position={[3.972, 13.496, 0.568]}
                />
              </group>
              <group position={[10.552, -2.46, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_125.geometry}
                  material={materials['Mat.2']}
                  position={[3.972, 13.496, 0.568]}
                />
              </group>
              <group position={[10.552, -2.46, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_128.geometry}
                  material={materials['Mat.2']}
                  position={[3.972, 13.496, 0.568]}
                />
              </group>
              <group position={[10.552, -2.46, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_131.geometry}
                  material={materials['Mat.2']}
                  position={[3.972, 13.496, 0.568]}
                />
              </group>
              <group position={[10.552, -2.46, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_134.geometry}
                  material={materials['Mat.2']}
                  position={[3.972, 13.496, 0.568]}
                />
              </group>
              <group position={[10.552, -2.46, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_137.geometry}
                  material={materials['Mat.2']}
                  position={[3.972, 13.496, 0.568]}
                />
              </group>
              <group position={[8.293, -2.46, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_140.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
              <group position={[8.293, -2.46, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_143.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
              <group position={[8.293, -2.46, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_146.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
              <group position={[8.293, -2.46, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_149.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
              <group position={[8.293, -2.46, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_152.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
              <group position={[8.293, -2.46, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_155.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
              <group position={[8.293, -2.46, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_158.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
              <group position={[8.293, -2.46, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_161.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
              <group position={[8.293, -2.46, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_164.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
              <group position={[8.293, -2.46, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_167.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
              <group position={[8.293, -2.46, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_170.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
              <group position={[8.293, -2.46, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_173.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
              <group position={[8.293, -2.46, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_176.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
              <group position={[8.293, -2.46, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_179.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
              <group position={[8.293, -2.46, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_182.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
              <group position={[8.293, -2.46, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_185.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
              <group position={[8.293, -2.46, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_188.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
              <group position={[8.293, -2.46, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_191.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
              <group position={[8.293, -2.46, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_194.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
              <group position={[8.293, -2.46, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_197.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
              <group position={[8.293, -2.46, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_200.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
              <group position={[8.293, -2.46, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_203.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
            </group>
            <group position={[1.901, -1.511, -0.012]}>
              <group position={[-3.433, 2.266, 0.015]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_207.geometry}
                  material={materials['Mat.2']}
                  position={[12.773, 11.236, 0.568]}
                />
              </group>
              <group position={[-3.433, 2.266, 0.015]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_210.geometry}
                  material={materials['Mat.2']}
                  position={[12.773, 11.236, 0.568]}
                />
              </group>
              <group position={[-3.433, 2.266, 0.015]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_213.geometry}
                  material={materials['Mat.2']}
                  position={[12.773, 11.236, 0.568]}
                />
              </group>
              <group position={[-3.433, 2.266, 0.015]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_216.geometry}
                  material={materials['Mat.2']}
                  position={[12.773, 11.236, 0.568]}
                />
              </group>
              <group position={[-3.433, 2.266, 0.015]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_219.geometry}
                  material={materials['Mat.2']}
                  position={[12.773, 11.236, 0.568]}
                />
              </group>
              <group position={[26.242, 3.397, 0.015]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_222.geometry}
                  material={materials['Mat.2']}
                  position={[-16.902, 10.105, 0.568]}
                />
              </group>
              <group position={[-3.433, 2.266, 0.015]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_225.geometry}
                  material={materials['Mat.2']}
                  position={[12.773, 11.236, 0.568]}
                />
              </group>
              <group position={[20.1, -4.975, 0.015]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_228.geometry}
                  material={materials['Mat.2']}
                  position={[-10.76, 18.477, 0.568]}
                />
              </group>
              <group position={[3.109, 0.006, 0.015]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_231.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
              <group position={[3.109, 0.006, 0.015]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_234.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
              <group position={[3.109, 0.006, 0.015]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_237.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
              <group position={[3.109, 0.006, 0.015]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_240.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
              <group position={[5.368, 0.006, 0.015]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_243.geometry}
                  material={materials['Mat.2']}
                  position={[3.972, 13.496, 0.568]}
                />
              </group>
              <group position={[5.368, 0.006, 0.015]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_246.geometry}
                  material={materials['Mat.2']}
                  position={[3.972, 13.496, 0.568]}
                />
              </group>
              <group position={[5.368, 0.006, 0.015]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_249.geometry}
                  material={materials['Mat.2']}
                  position={[3.972, 13.496, 0.568]}
                />
              </group>
              <group position={[5.368, 0.006, 0.015]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_252.geometry}
                  material={materials['Mat.2']}
                  position={[3.972, 13.496, 0.568]}
                />
              </group>
              <group position={[5.368, 0.006, 0.015]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_255.geometry}
                  material={materials['Mat.2']}
                  position={[3.972, 13.496, 0.568]}
                />
              </group>
              <group position={[26.242, 3.397, 0.015]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_258.geometry}
                  material={materials['Mat.2']}
                  position={[-16.902, 10.105, 0.568]}
                />
              </group>
              <group position={[26.242, 1.023, 0.015]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_261.geometry}
                  material={materials['Mat.2']}
                  position={[-16.902, 12.479, 0.568]}
                />
              </group>
              <group position={[3.109, 0.006, 0.015]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_264.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
              <group position={[3.109, 0.006, 0.015]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_267.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
              <group position={[3.109, 0.006, 0.015]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_270.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
              <group position={[3.109, 0.006, 0.015]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_273.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_275.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_277.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_279.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
              <group position={[1.44, -4.789, -0.094]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_283.geometry}
                  material={materials['Mat.2']}
                  position={[7.901, 18.291, 0.678]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_285.geometry}
                  material={materials['Mat.2']}
                  position={[7.901, 18.291, 0.678]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_287.geometry}
                  material={materials['Mat.2']}
                  position={[7.901, 18.291, 0.678]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_289.geometry}
                  material={materials['Mat.2']}
                  position={[7.901, 18.291, 0.678]}
                />
              </group>
              <group position={[3.109, 0.006, 0.015]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_292.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
              <group position={[3.109, 0.006, 0.015]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_295.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
              <group position={[3.109, 0.006, 0.015]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_298.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
              <group position={[3.109, 0.006, 0.015]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_301.geometry}
                  material={materials['Mat.2']}
                  position={[6.231, 13.496, 0.568]}
                />
              </group>
              <group position={[-13.157, 2.369, -0.015]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_304.geometry}
                  material={materials['Mat.2']}
                  position={[22.497, 11.133, 0.599]}
                />
              </group>
              <group position={[-13.157, 2.369, -0.015]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_307.geometry}
                  material={materials['Mat.2']}
                  position={[22.497, 11.133, 0.599]}
                />
              </group>
            </group>
          </group>
        </group>
        <group position={[0, -6.967, -2.933]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_310.geometry}
            material={materials.Component}
            position={[0, 6.967, 2.933]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_312.geometry}
            material={materials.Component}
            position={[0, 6.967, 2.933]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_314.geometry}
            material={materials.Component}
            position={[0, 6.967, 2.933]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_316.geometry}
            material={materials.Component}
            position={[0, 6.967, 2.933]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_318.geometry}
            material={materials.Component}
            position={[0, 6.967, 2.933]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_320.geometry}
            material={materials.Component}
            position={[0, 6.967, 2.933]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_322.geometry}
            material={materials.Component}
            position={[0, 6.967, 2.933]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_324.geometry}
            material={materials.Component}
            position={[0, 6.967, 2.933]}
          />
        </group>
        <group position={[-19.997, 29.77, 22.103]}>
          <group position={[19.613, -18.132, 4.591]} rotation={[0.826, -0.474, 0.398]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_328.geometry}
              material={materials.Component}
              position={[-14.37, -23.807, -8.651]}
              rotation={[-0.747, 0.607, 0.057]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_330.geometry}
              material={materials.Component}
              position={[-14.37, -23.807, -8.651]}
              rotation={[-0.747, 0.607, 0.057]}
            />
          </group>
          <group
            position={[49.148, -27.055, -0.223]}
            rotation={[-0.301, 0.766, 0.037]}
            scale={0.015}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_333.geometry}
              material={materials.Component}
              position={[-383.933, 272.255, -2367.65]}
              rotation={[0.377, -0.738, 0.232]}
              scale={66.046}
            />
          </group>
          <group position={[6.425, -21.829, -17.433]} scale={0.554}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_336.geometry}
              material={materials.Component}
              position={[24.495, -14.332, -8.428]}
              scale={1.805}
            />
          </group>
          <group position={[2.941, -57.352, -8.591]} scale={0.99}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_339.geometry}
              material={materials.Component}
              position={[17.228, 27.861, -13.648]}
              scale={1.01}
            />
          </group>
          <group position={[-0.993, -23.626, -15.797]} rotation={[0, 1.081, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_342.geometry}
              material={materials.Component}
              position={[15.435, -6.144, 15.56]}
              rotation={[0, -1.081, 0]}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/laptop_concept.glb')

export default LaptopConcept;