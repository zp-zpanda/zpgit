// @flow
import { FileSystem, GitConfig } from '../models'

/** @ignore */
export class GitConfigManager {
  static async get ({ fs: _fs, gitdir }) {
    const fs = new FileSystem(_fs)
    // We can improve efficiency later if needed.
    // TODO: read from full list of git config files
    let text = await fs.read(`${gitdir}/config`, { encoding: 'utf8' })
    return GitConfig.from(text)
  }
  static async save ({ fs: _fs, gitdir, config }) {
    const fs = new FileSystem(_fs)
    // We can improve efficiency later if needed.
    // TODO: handle saving to the correct global/user/repo location
    await fs.write(`${gitdir}/config`, config.toString(), {
      encoding: 'utf8'
    })
  }
}