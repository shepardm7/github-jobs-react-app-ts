export default class Job {
  id: string;
  type: string;
  url: string;
  created_at: string;
  company: string;
  company_url: string | null;
  location: string;
  title: string;
  description: string;
  how_to_apply: string;
  company_logo: string | null;

  constructor(id: string, type: string, url: string, created_at: string, company: string, company_url: string | null, location: string, title: string, description: string, how_to_apply: string, company_logo: string | null) {
    this.id = id;
    this.type = type;
    this.url = url;
    this.created_at = created_at;
    this.company = company;
    this.company_url = company_url;
    this.location = location;
    this.title = title;
    this.description = description;
    this.how_to_apply = how_to_apply;
    this.company_logo = company_logo;
  }
}
