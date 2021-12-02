import { Controller } from '@/interfaces/controllers'

type Adapter = (controller: Controller) => any

export const adaptServerlessSns: Adapter = controller => async (event, _context, callback) => {
  for (const item of event.Records) {
    const { statusCode, data } = await controller.handle({ body: item.Sns.message })
    callback(null, {
      statusCode,
      body: JSON.stringify({
        status: statusCode,
        body: data
      })
    })
  }
}
