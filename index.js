const { getLinkPreview } = require("link-preview-js");

async function init() {
    try {
        const response = await getLinkPreview('https://github.com/', {
            imagesPropertyType: "og", headers: {
              "user-agent": "googlebot",
              'Accept-Language': 'en-US'
            },
            timeout: 10000
          });
          console.log(response)
    } catch (error) {
        console.error(error);
    }
}

  
init();