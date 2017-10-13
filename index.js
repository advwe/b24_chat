module.exports = (Franz) => {
  class Bitrix24 extends Franz {
    validateServer(URL) {
      return new Promise((resolve, reject) => {
        $.get(URL, (resp) => {
            resolve();
        }).fail(reject);
      });
    }
  }

  return Bitrix24;
};