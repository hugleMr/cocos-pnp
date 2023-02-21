import { parentPort, workerData } from 'worker_threads'
import { exec3xAdapter } from 'playable-adapter-core'

const task = async () => {
  const { buildFolderPath, adapterBuildConfig } = workerData
  await exec3xAdapter({
    buildFolderPath,
    adapterBuildConfig
  }, {
    mode: 'serial'
  })

  parentPort?.postMessage(true)
}
task()