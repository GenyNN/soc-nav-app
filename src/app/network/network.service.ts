export class NetworkService {

  getNetworks() {
    return Object.keys(this.networks).map(id => {
      const network = this.networks[id];
      return {
        id: network.id,
        name: network.name
      };
    });
  }

  getNetwork(id) {
    return this.networks[id];
  }


  private networks = {
    "630662ea-1c7d-4208-99fd-ba3afec20f0c": {
      "id": "630662ea-1c7d-4208-99fd-ba3afec20f0c",
      "name": "VK",
      "description": "<p>" +
      "VK (VKontakte) is a Russian-based online social media and social networking service." +
      " It is available in several languages but it is especially popular among Russian-speaking users." +
      "</p>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/2/21/VK.com-logo.svg",
      "emitents": [
        {
          "id": "c1f40fac-2abd-3f0c-a635-26d166766b46",
          "title": "Vladimir Lenin",
        },
        {
          "id": "aa65edf4-9f38-38de-bab1-c85c993449ef",
          "title": "Iosif Stalin",
        }
      ]
    },
    "9a709693-b4f8-4da9-8cc1-038c911a61be": {
      "id": "9a709693-b4f8-4da9-8cc1-038c911a61be",
      "name": "Facebook",
      "description":  "Facebook is an American for-profit corporation and an online social media and social networking service based in Menlo Park, California.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg",
      "emitents": [
        {
          "id": "72a7d9d5-7fcd-3b37-ae56-4ef1d5abb2f3",
          "title": "Winston Churchill"
        },
        {
          "id": "6edbf73e-6078-3679-a4b9-280a13cf55a8",
          "title": "Margaret Thatcher"
        }
      ]
    },
    "cedd2cc6-c77f-4104-b333-0547b29e0b71": {
      "id": "cedd2cc6-c77f-4104-b333-0547b29e0b71",
      "name": "Linkedin",
      "description": "<p>LinkedIn is a business- and employment-oriented social networking service that operates via websites and mobile apps. Founded on December 28, 2002 and" +
      " launched on May 5, 2003 it is mainly used for professional networking, including employers posting jobs and job seekers posting their CVs</p>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg",
      "emitents": [
        {
          "id": "b576dcd9-b1db-3104-a730-f732a86ed60d",
          "title": "George Washington"
        }
      ]
    }
  };

}
