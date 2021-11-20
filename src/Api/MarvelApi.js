export class MarvelApi {
  static fetchComics = async () => {
    const url =
      "https://gateway.marvel.com/v1/public/comics?apikey=3cb62d086d5debdeea139095cbb07fe4&ts=redant&hash=140e85a50884cef76d614f6dacada288";
    try {
      const res = await fetch(url);
      if (res.status >= 400) return { error: res.status };
      const body = await res.json();
      return { comics: body.data.results };
    } catch (error) {
      console.log(error);
      return { error };
    }
  };
}
