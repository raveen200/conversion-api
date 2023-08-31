type Arguments = {
  endpoint: string
  body: any
};

/**
 * Facebook Graph API client.
 *
 * @param endpoint
 * @param body
 * @constructor
 */
const graphApi = async <T>({ endpoint = '', body = null }: Arguments): Promise<T> => {
  // for (var pair of body.entries()) {
  //   console.log(pair[0]+ ', ' + pair[1]); 
  // }
  const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID ?? '';

  const request = new Request(`https://graph.facebook.com/v17.0/${pixelId}/${endpoint}`, {
    method: 'POST',
    ...(body && { body }),
  });

  return fetch(request)
    .then((response) => response.json() as Promise<T>)
    .catch((e: Error) => {
      throw e;
    });
};

export default graphApi;
