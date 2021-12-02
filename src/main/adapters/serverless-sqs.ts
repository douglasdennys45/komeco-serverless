import { Controller } from '@/interfaces/controllers'

type Adapter = (controller: Controller) => any

export const adaptServerlessAmqp: Adapter = controller => async (event, _context, callback) => {
  for (const item of event.Records) {
    const { statusCode, data } = await controller.handle({ body: item.body })
    callback(null, {
      statusCode,
      body: JSON.stringify({
        status: statusCode,
        body: data
      })
    })
  }
}
