import React from "react";
import Link from "next/link";

const page = () => {
    return (
        <>
            {/* ----------- Page Banner --------- */}
            <section
                className="breadcrumb-area custom-breadcrumb bg-green bg-cover"
                style={{
                    backgroundImage: `url('/img/about-banner.webp')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                }}
            >
                <div className="container">
                    <div className="breadcrumb-item">
                        <div className="row">
                            <div className="col-lg-8 ">
                                <nav className="woocommerce-breadcrumb" aria-label="Breadcrumb">
                                    <Link href="/">Home</Link> / DevOps / Platform Engineer
                                </nav>
                                <h1 className="breadcumb-title">DevOps / Platform Engineer </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="career-detail section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Role Summary</h3>
                            <p>
                                We are hiring a DevOps / Platform Engineer to build and support internal developer platforms running on our Kubernetes-based on-prem infrastructure. You’ll own CI/CD pipelines, infrastructure-as-code automation, and GitOps workflows to accelerate development and deployment velocity. This role ensures our development teams can build, ship, and scale with minimal friction in a secure and resilient environment.
                            </p>

                            <div className="career-list">
                                <h3>Key Responsibilities</h3>

                                <p className="job-subtitle">Platform Engineering (35%)</p>
                                <ul>
                                    <li>Design and manage self-service tools and developer enablement platforms</li>
                                    <li>Create and maintain Helm charts and Kubernetes Operators</li>
                                    <li>Implement GitOps workflows using ArgoCD or Flux</li>
                                    <li>Develop automation scripts and internal tooling</li>
                                    <li>Manage namespace isolation, resource quotas, and multi-tenancy strategies</li>
                                </ul>

                                <p className="job-subtitle">CI/CD & Automation (35%)</p>
                                <ul>
                                    <li>Build and maintain CI/CD pipelines (GitLab CI, Jenkins, Tekton)</li>
                                    <li>Automate testing, security scanning, and quality control steps</li>
                                    <li>Manage infrastructure using IaC tools like Terraform, Ansible, and Kustomize</li>
                                    <li>Maintain container registries and artifact repositories</li>
                                </ul>

                                <p className="job-subtitle">Security & Compliance (20%)</p>
                                <ul>
                                    <li>Enforce Kubernetes security best practices</li>
                                    <li>Manage secrets using Vault, Sealed Secrets, or similar tools</li>
                                    <li>Configure RBAC, network policies, and Pod Security Standards</li>
                                    <li>Conduct regular audits and vulnerability scanning</li>
                                </ul>

                                <p className="job-subtitle">Developer Support & Collaboration (10%)</p>
                                <ul>
                                    <li>Provide guidance on cloud-native architecture and DevOps practices</li>
                                    <li>Create documentation, onboarding guides, and runbooks</li>
                                    <li>Offer training and support for developers using platform tools</li>
                                    <li>Participate in on-call rotation and incident response for platform services</li>
                                </ul>
                            </div>

                            <div className="career-list">
                                <h3>Required Qualifications</h3>

                                <p className="job-subtitle">Education & Experience</p>
                                <ul>
                                    <li>Bachelor’s degree in Computer Science, Engineering, or equivalent experience</li>
                                    <li>3+ years in DevOps, Platform, or SRE roles</li>
                                    <li>2+ years managing Kubernetes and container-based platforms</li>
                                    <li>Strong software development and scripting skills</li>
                                </ul>

                                <p className="job-subtitle">Technical Skills</p>
                                <ul>
                                    <li>Containers: Kubernetes, Docker, Helm</li>
                                    <li>CI/CD: GitLab CI, Jenkins, ArgoCD, Tekton</li>
                                    <li>Programming: Proficient in Python, Go, or Java</li>
                                    <li>IaC: Terraform, Ansible, Kustomize</li>
                                    <li>Version Control: Git, GitHub/GitLab</li>
                                    <li>Monitoring: Prometheus, Grafana, OpenTelemetry</li>
                                    <li>Data Services: PostgreSQL, Redis, MongoDB</li>
                                    <li>Messaging Systems: Kafka, RabbitMQ, MQTT</li>
                                </ul>

                                <p className="job-subtitle">Cloud-Native Competency</p>
                                <ul>
                                    <li>Microservices and 12-factor app principles</li>
                                    <li>Container security and hardening practices</li>
                                    <li>API gateway integration and service mesh (Istio, Linkerd)</li>
                                </ul>

                                <p className="job-subtitle">Soft Skills</p>
                                <ul>
                                    <li>Strong automation mindset and engineering rigor</li>
                                    <li>Excellent problem-solving and debugging skills</li>
                                    <li>Collaborative and team-oriented</li>
                                    <li>Effective communicator with solid documentation skills</li>
                                </ul>

                                <p className="job-subtitle">Preferred Qualifications</p>
                                <ul>
                                    <li>Kubernetes certifications (CKA, CKAD)</li>
                                    <li>Familiarity with big data tools (Spark, Airflow)</li>
                                    <li>Contributions to open-source projects</li>
                                    <li>Experience in bare-metal or edge Kubernetes environments</li>
                                </ul>

                                <p className="job-subtitle">Compensation & Benefits</p>
                                <ul>
                                    <li>Competitive salary based on experience and skillset</li>
                                    <li>Health, dental, and vision insurance</li>
                                    <li>Annual training and certification budget</li>
                                    <li>Flexible working hours and on-call compensation</li>
                                    <li>Hands-on experience with leading open-source tools and infrastructure</li>
                                </ul>

                                <p className="job-subtitle">Working Conditions</p>
                                <ul>
                                    <li>On-site presence required for hardware maintenance and installation</li>
                                    <li>Participation in on-call rotation (approximately 1 week per month)</li>
                                    <li>Occasional after-hours maintenance windows</li>
                                    <li>Physical ability to lift and rack equipment (up to 50 lbs)</li>
                                </ul>
                            </div>

                            <div className="career-list">
                                <h3>How to Apply</h3>
                                <p>
                                    Submit your resume and a cover letter outlining your experience in Kubernetes, infrastructure, or platform engineering. Highlight any relevant projects, open-source contributions, or certifications.
                                </p>
                            </div>

                            <div className="job-footer mt-4">
                                <a className="default-btn" href="mailto:people@elile.ai">
                                    Apply Now
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};
export default page;
