
import type { NextApiRequest, NextApiResponse } from 'next';

import { client } from '../../../sanity/lib/client';


const createUserInSanity = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const userDoc = {
        _type: 'users',
        _id: req.body.userWalletAddress,
        name: req.body.name,
        walletAddress: req.body.userWalletAddress,
      }
  
      await client.createIfNotExists(userDoc)
      res.status(200).send({ message: 'success' })
    } catch (error) {
      res.status(500).send({ message: 'error', data: error })
    }
  }
  
  export default createUserInSanity