export class MarvelApi {
  static fetchComics = async (offset) => {
    const base = "https://gateway.marvel.com/v1/public/comics?";
    const parameters = {
      apikey: "cbb4d7cc23d84e48f845f3a4dc0ea39b",
      offset,
    };
    const url =
      base +
      Object.entries(parameters)
        .map((entries) => entries.join("="))
        .join("&");
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
