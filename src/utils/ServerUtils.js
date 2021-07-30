class ServerUtils {
  constructor() {
    this.url = 'http://localhost:5000/api/v1/';
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
    window.location.href = '/';
  };

  sendData = async (data) => {
    await fetch(this.url + 'eintraege', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => (data = data.json()))
      .then((data) => console.log(data));
  };

  showAbfragen = async () => {
    let data = await fetch(this.url + 'eintraege');
    data = data.json();
    return data;
  };
}
module.exports = ServerUtils;
