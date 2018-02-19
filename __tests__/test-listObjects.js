/* global describe it expect */
const { makeFixture } = require('./__helpers__/FixtureFS.js')
import { listObjects } from 'isomorphic-git/internal-apis'

describe('listObjects', () => {
  it('listObjects', async () => {
    let { fs, gitdir } = await makeFixture('test-listObjects')
    let objects = await listObjects({
      fs,
      gitdir,
      oids: [
        'c60bbbe99e96578105c57c4b3f2b6ebdf863edbc',
        'e05547ea87ea55eff079de295ff56f483e5b4439',
        'ebdedf722a3ec938da3fd53eb74fdea55c48a19d',
        '0518502faba1c63489562641c36a989e0f574d95'
      ]
    })
    expect([...objects]).toMatchSnapshot()
  })
})