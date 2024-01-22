interface Author {
  url: string;
  name: string;
}

interface SiteConfigProps {
  title: string;
  description: string;
  icon: string;
  author: Author;
}

const siteConfigs: SiteConfigProps = {
  title: "Corbelli Mattia",
  description: "Software developer personal portfolio",
  icon: "/portfolio-logo.svg",
  author: {
    url: "https://github.com/mcorbelli",
    name: "Corbelli Mattia",
  },
};

export default siteConfigs;
