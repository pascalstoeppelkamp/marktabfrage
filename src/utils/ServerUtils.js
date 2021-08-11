export default class ServerUtils {
  constructor() {
    this.url = 'https://peaceful-atoll-11738.herokuapp.com/api/v1/';
  }

  login = async (body) => {
    let data = await fetch(this.url + 'auth/login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    data = data.json();
    return data;
  };

  logout = async () => {
    await fetch(this.url + 'auth/logout').then((data) =>
      (data = data.json()).then((data) => console.log(data))
    );
    document.cookie = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    localStorage.clear();
    window.location.href = '/marktabfrage';
  };

  sendData = async (data) => {
    let sendData = await fetch(this.url + 'eintraege', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    sendData = sendData.json();
    return sendData;
  };

  showAbfragen = async (body) => {
    let data = await fetch(this.url + 'eintraege/eintrag', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    data = data.json();
    return data;
  };
}
