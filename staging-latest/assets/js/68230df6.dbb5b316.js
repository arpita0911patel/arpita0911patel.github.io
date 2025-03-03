"use strict";(self.webpackChunkciroh_docuhub=self.webpackChunkciroh_docuhub||[]).push([[5720],{15852:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"services/cloudservices/aws/documentation/aws-best-practice/index","title":"AWS Best Practices","description":"As the main account administrator for CIROH subaccount, here are some best practices to follow within your subaccount:","source":"@site/docs/services/cloudservices/aws/documentation/aws-best-practice/index.md","sourceDirName":"services/cloudservices/aws/documentation/aws-best-practice","slug":"/services/cloudservices/aws/documentation/aws-best-practice/","permalink":"/docs/services/cloudservices/aws/documentation/aws-best-practice/","draft":false,"unlisted":false,"editUrl":"https://github.com/CIROH-UA/ciroh-ua_website/edit/main/docs/services/cloudservices/aws/documentation/aws-best-practice/index.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"AWS Best Practices"},"sidebar":"services","previous":{"title":"Documentation and Tutorial","permalink":"/docs/services/cloudservices/aws/documentation/"},"next":{"title":"Tag Resources on AWS","permalink":"/docs/services/cloudservices/aws/documentation/tagging/"}}');var t=s(74848),r=s(28453);const a={sidebar_position:1,title:"AWS Best Practices"},o="AWS Best Practices for CIROH AWS Users",c={},l=[{value:"Security:",id:"security",level:2},{value:"Access Key Management :",id:"access-key-management-",level:2},{value:"Resource Management:",id:"resource-management",level:2},{value:"Governance and Compliance:",id:"governance-and-compliance",level:2},{value:"Additional Recommendations:",id:"additional-recommendations",level:2},{value:"Application Deployment:",id:"application-deployment",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"aws-best-practices-for-ciroh-aws-users",children:"AWS Best Practices for CIROH AWS Users"})}),"\n",(0,t.jsx)(n.p,{children:"As the main account administrator for CIROH subaccount, here are some best practices to follow within your subaccount:"}),"\n",(0,t.jsx)(n.h2,{id:"security",children:"Security:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"MFA:"})," Require Multi-Factor Authentication (MFA) for all subaccount users and admins to enhance account security."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"IAM roles for resources:"})," Instead of individual access keys, utilize IAM roles for accessing resources within subaccounts. This simplifies access management and eliminates the need for storing long-lived credentials."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Regularly review and update permissions:"})," Regularly review and update user and role permissions within subaccounts to ensure they remain aligned with their current needs."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Utilize git-secrets"}),": git-secrets is a client tool that prohibits unwanted commits containing secret data such as API keys, passwords, and tokens. You can integrate it into your CI/CD pipelines to prevent sensitive information from being added to your GitHub repositories. For more information, refer to the ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/scan-git-repositories-for-sensitive-information-and-security-issues-by-using-git-secrets.html",children:"AWS documentation"})," and the ",(0,t.jsx)(n.a,{href:"https://github.com/awslabs/git-secrets",children:"git-secrets GitHub repository"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Use AWS Secrets Manager"}),": Use AWS Secrets Manager, or other secrets management solution, so you don\u2019t have to hardcode keys in plaintext. The application or client can then retrieve secrets when needed. For more information, see ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html",children:"What is AWS Secrets Manager?"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"access-key-management-",children:"Access Key Management :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Never store your access key in plain text, in a code repository, or in code."}),"\n",(0,t.jsx)(n.li,{children:"Never check in the access key in the public repository."}),"\n",(0,t.jsx)(n.li,{children:"Disable or delete access key when no longer needed."}),"\n",(0,t.jsx)(n.li,{children:"Enable least-privilege permissions."}),"\n",(0,t.jsx)(n.li,{children:"Rotate access keys regularly, preferably every 90 days."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"resource-management",children:"Resource Management:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Tagging:"})," Implement a consistent tagging strategy for resources in all linked accounts. This allows for better cost allocation, resource identification, and easier filtering when managing resources across multiple accounts. Follow ",(0,t.jsx)(n.a,{href:"https://docs.ciroh.org/docs/services/cloudservices/aws/tagging",children:"How to tag resources on AWS"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Cost allocation"}),": Allowed limit for ",(0,t.jsx)(n.strong,{children:"new"})," subaccount is $500/project per month. Monitor the usage throughout the month and if it reaches above $500/project, notify admin of the subaccount to take necessary actions. For projects expecting more than $500 per month usage, please email ",(0,t.jsx)(n.a,{href:"mailto:ciroh-it-admin@ua.edu",children:"ciroh-it-admin@ua.edu"})," in advance to get the approval from higher management. ",(0,t.jsx)(n.strong,{children:"Effective Sept 2024"}),", we transitioned to a new budgeting model (for existing\nusers) that provides your CIROH AWS subaccount with a $10,000 budget for\nevery 6-month period and monthly max limit of $3000. This change will give\nyou more flexibility to plan and execute your research workloads without the\nconstraints of a monthly cap."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Resource quotas:"})," Set resource quotas for subaccounts to limit their spending and resource usage. This helps prevent accidental overspending and ensures efficient resource allocation."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Monitor resource usage:"})," Encourage subaccount admins to monitor their resource usage regularly to identify potential cost optimization opportunities."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Data Locality:"})," Always consider the location of your data when selecting a region for deploying resources. Deploying resources in the same region as your data minimizes data transfer costs and latency, leading to improved performance and cost-efficiency."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Region Selection:"})," Carefully evaluate the available AWS regions and select the one that best aligns with your data residency requirements, compliance needs, and desired performance characteristics."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"EBS:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"EBS Volume Management: Avoiding Unnecessary Costs:"})," Terminate EBS Volumes with Terminated Instances: When terminating an EC2 instance, ensure that you also delete any associated EBS volumes that are no longer needed. EBS volumes incur charges even if they are not attached to a running instance."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Regularly Review EBS Volume Usage:"})," Periodically review your EBS volumes using the EC2 Management Console or AWS CLI. Identify any unattached volumes that are no longer required and delete them to avoid ongoing charges."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"EFS:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Data Lifecycle Management:"})," Evaluate your data access patterns. For infrequently accessed files, consider migrating data from Amazon EFS to Amazon S3 to leverage its cost-efficient storage classes, such as S3 Standard-IA or S3 Glacier."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Tiered Storage Strategy:"})," Implement a tiered storage strategy where frequently accessed data resides on EFS for high performance, while infrequently accessed or archival data is moved to S3 for cost-effective long-term storage."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"governance-and-compliance",children:"Governance and Compliance:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Standardized configurations:"})," Establish and enforce standardized configurations for resources across linked accounts. This ensures consistency and simplifies management."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Compliance policies:"})," Implement compliance policies for subaccounts to ensure they adhere to relevant regulations and internal standards."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Logging and auditing:"})," Enable logging and auditing for all activities within linked accounts to track resource usage, identify potential security threats, and maintain compliance."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Regular security audits:"})," Conduct regular security audits of linked accounts to identify and address any vulnerabilities."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"additional-recommendations",children:"Additional Recommendations:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Centralized documentation:"})," Use CIROH DocuHub (",(0,t.jsx)(n.a,{href:"https://docs.ciroh.org",children:"docs.ciroh.org"}),") as a central location for documenting procedures, best practices, and resource usage guidelines for linked accounts."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Training and awareness:"})," Offer training and awareness programs to subaccount admins on secure practices, compliance requirements, and resource management best practices through CIROH AWS Office hours."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Regular communication:"})," Maintain regular communication with subaccount admins to address their concerns, answer questions, and share updates regarding policies and procedures via Slack Channel and also available through CIROH AWS Office hours."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"application-deployment",children:"Application Deployment:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Use terraforms or any Infrastructure as Code if possible for your application deployment."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var i=s(96540);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);