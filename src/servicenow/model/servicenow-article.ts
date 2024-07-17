export interface ServiceNowArticle {
  link: string;
  id: string;
  title: string;
  snippet: string;
  number?: string;
  fields: {
    category: {
      name: string;
      value: string;
      display_value: string;
    };
    topic: {
      name: string;
      value: string;
      display_value: string;
    };
    text: {
      value: string;
    };
    workflow_state: {
      value: string;
    };
  };
}
