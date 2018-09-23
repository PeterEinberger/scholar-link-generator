const express = require('express')
const app = express()
const scholar = require('google-scholar')

let cache = {
  "results": [
    {
      "title": "Industrie 4.0 in produktion, automatisierung und logistik: anwendung, technologien und migration",
      "url": "https://link.springer.com/book/10.1007/978-3-658-04682-8?page=2",
      "authors": [
        {
          "name": "T Bauernhansl",
          "url": ""
        },
        {
          "name": "M Ten Hompel",
          "url": ""
        },
        {
          "name": "B Vogel-Heuser",
          "url": "https://scholar.google.com/citations?user=_MFvvVcAAAAJ&hl=en&oe=ASCII&oi=sra"
        }
      ],
      "description": "Ausgehend von ersten Anwendungen diskutieren die Autoren die wichtigsten Fragen aus Sicht \nder Wirtschaft und stellen einen Fahrplan f�r eine erfolgreiche Einf�hrung von Industrie 4.0 \nvor. Ein zentraler Bestandteil des Werkes und Voraussetzung f�r jede Investition ist die detaillierte�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Methodology for energy efficiency on process level",
      "url": "https://www.sciencedirect.com/science/article/pii/S221282711300317X",
      "authors": [
        {
          "name": "M D&#xFFFD;rr",
          "url": ""
        },
        {
          "name": "S Wahren",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2013",
          "url": ""
        }
      ],
      "description": "Today, energy efficiency issues are becoming more and more important within organizations. Many problems arise when these organizations take the challenge of producing with fewer resources, like materials and energy. There is no general procedure to�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S221282711300317X/pdf?md5=9202cdf91727e9626983257653884398&pid=1-s2.0-S221282711300317X-main.pdf&_valck=1"
    },
    {
      "title": "Die vierte industrielle Revolution–Der Weg in ein wertschaffendes Produktionsparadigma",
      "url": "https://link.springer.com/chapter/10.1007/978-3-662-53254-6_1",
      "authors": [
        {
          "name": "T Bauernhansl&#xFFFD;- Handbuch Industrie 4.0 Bd. 4",
          "url": ""
        },
        {
          "name": "2017",
          "url": ""
        }
      ],
      "description": "Zussamenfassung Wenn im Zusammenhang mit Industrie 4.0 immer wieder von der 4. Industriellen Revolution gesprochen wird, macht es Sinn, zun�chst einmal einen Blick auf die vergangenen drei Revolutionen zu werfen, zu analysieren, was in diesen�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Managing complexity in supply chains: A discussion of current approaches on the example of the semiconductor industry",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827113002217",
      "authors": [
        {
          "name": "J Aelker",
          "url": ""
        },
        {
          "name": "T Bauernhansl",
          "url": ""
        },
        {
          "name": "H Ehm",
          "url": "https://scholar.google.com/citations?user=wVKPFkYAAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "2013",
          "url": ""
        }
      ],
      "description": "The aim of this paper is to analyze the state of the art of complexity management in the area of supply chain management. In this regard, the suitability of Complex Adaptive System (CAS) modeling for making complexity-optimizing supply chain decisions is discussed on�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S2212827113002217/pdf?md5=6eb2199eb1bdc73126a3079a36779b91&isDTMRedir=Y&pid=1-s2.0-S2212827113002217-main.pdf&_valck=1"
    },
    {
      "title": "Virtual fort knox federative, secure and cloud-based platform for manufacturing",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827113002965",
      "authors": [
        {
          "name": "P Holtewert",
          "url": ""
        },
        {
          "name": "R Wutzke",
          "url": ""
        },
        {
          "name": "J Seidelmann",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2013",
          "url": ""
        }
      ],
      "description": "In future the engineer and IT world will grow together. Networking and linking of information from the physical production and the digital world enable an optimization in manufacturing. Within the research project Virtual Fort Knox at the Fraunhofer IPA in Germany, a federative�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S2212827113002965/pdf?md5=b9573e314b61ae30c4860924dd5763e8&isDTMRedir=Y&pid=1-s2.0-S2212827113002965-main.pdf&_valck=1"
    },
    {
      "title": "Configuration of virtual enterprises based on a framework for global virtual business",
      "url": "http://www.academia.edu/download/4392956/10.1.1.83.1293.pdf#page=78",
      "authors": [
        {
          "name": "W Eversheim",
          "url": ""
        },
        {
          "name": "T Bauernhansl",
          "url": ""
        },
        {
          "name": "C Bremer&#x2026;&#xFFFD;- Organizational&#xFFFD;&#x2026;",
          "url": ""
        },
        {
          "name": "1998",
          "url": ""
        }
      ],
      "description": "Abstract To start Virtual Enterprises running efficiently it is proposed to follow the Framework for Global Virtual Business. The framework in principle consists of three entities: Virtual Industry Cluster, Virtual Enterprise Broker and Virtual Enterprise. Each entity has its core�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "http://www.academia.edu/download/4392956/10.1.1.83.1293.pdf#page=78"
    },
    {
      "title": "A methodology to evaluate enterprises to become members of Virtual Industry Clusters",
      "url": "https://link.springer.com/chapter/10.1007/978-0-387-35399-9_43",
      "authors": [
        {
          "name": "D Caballero",
          "url": ""
        },
        {
          "name": "A Molina",
          "url": "https://scholar.google.com/citations?user=a5vPbSMAAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Working Conference on Virtual&#xFFFD;&#x2026;",
          "url": ""
        },
        {
          "name": "2000",
          "url": ""
        }
      ],
      "description": "Based on the Framework for Global Virtual Business developed by the COSME Network, the partners for a Virtual Enterprise (VE) has to be selected from members of a Virtual Industry Cluster (VIC). This paper describes 1) major issues involved in evaluating possible�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://link.springer.com/content/pdf/10.1007/978-0-387-35399-9_43.pdf"
    },
    {
      "title": "Cloud-based platform to facilitate access to manufacturing IT",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827114010762",
      "authors": [
        {
          "name": "D Stock",
          "url": ""
        },
        {
          "name": "M St&#xFFFD;hr",
          "url": ""
        },
        {
          "name": "U Rauschecker",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2014",
          "url": ""
        }
      ],
      "description": "Today information technology is one of the main enablers of efficient production due to its ability to support manufacturing planning, execution, and optimization. However, most of the tools that provide these features are extremely complex and require on-site installation�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S2212827114010762/pdf?md5=49e113ec15a4bcde2ca977379c4d792a&isDTMRedir=Y&pid=1-s2.0-S2212827114010762-main.pdf&_valck=1"
    },
    {
      "title": "Method for a systematic evaluation of advanced complexity management maturity",
      "url": "https://www.sciencedirect.com/science/article/pii/S221282711400729X",
      "authors": [
        {
          "name": "A Kluth",
          "url": ""
        },
        {
          "name": "J J&#xFFFD;ger",
          "url": ""
        },
        {
          "name": "A Schatz",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2014",
          "url": ""
        }
      ],
      "description": "Dealing with the strongly increasing complexity of the company itself and its environment has become a key competitive factor. Companies can only face the progressively increasing external complexity in global markets with an appropriate “healthy” internal complexity. It�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S221282711400729X/pdf?md5=0246b46095c56fe8c2736036e8b7a278&isDTMRedir=Y&pid=1-s2.0-S221282711400729X-main.pdf&_valck=1"
    },
    {
      "title": "An Approach for the Planning and Optimization of Energy Consumption in Factories Considering the Peripheral Systems",
      "url": "https://link.springer.com/chapter/10.1007/978-3-642-29069-5_57",
      "authors": [
        {
          "name": "H Haag",
          "url": ""
        },
        {
          "name": "J Siegert",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#x2026;&#xFFFD;- &#x2026;&#xFFFD;Technology for a&#xFFFD;&#x2026;",
          "url": ""
        },
        {
          "name": "2012",
          "url": ""
        }
      ],
      "description": "The manufacturing industry accounts for a large part of energy consumption. The research group “ECOMATION” has developed methodologies to save energy in the manufacturing industry. The described model-based approach supports manufacturers in analyzing and�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Evaluation of Complexity Management Systems–Systematical and maturity-based approach",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827114003357",
      "authors": [
        {
          "name": "A Kluth",
          "url": ""
        },
        {
          "name": "J J&#xFFFD;ger",
          "url": ""
        },
        {
          "name": "A Schatz",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2014",
          "url": ""
        }
      ],
      "description": "The way to deal with the strongly increasing complexity of the company itself and its environment has become a key competitive factor. The complexity within a production company is characterized by the challenges encountered in daily business processes and�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S2212827114003357/pdf?md5=b0319764c24ce081597810b4baba6005&isDTMRedir=Y&pid=1-s2.0-S2212827114003357-main.pdf&_valck=1"
    },
    {
      "title": "Advanced complexity management strategic recommendations of handling the “Industrie 4.0” complexity for small and medium enterprises",
      "url": "https://www.sciencedirect.com/science/article/pii/S221282711631174X",
      "authors": [
        {
          "name": "J J&#xFFFD;ger",
          "url": ""
        },
        {
          "name": "O Sch&#xFFFD;llhammer",
          "url": ""
        },
        {
          "name": "M Lickefett",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2016",
          "url": ""
        }
      ],
      "description": "The new chances and perspectives of “Industrie 4.0”, with cloud computing, cyber-physical systems and smart factory, lead to an increasing complexity and hence opacity, especially for small and medium enterprises. The current Fraunhofer IPA empirical study “Industrie 4.0�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S221282711631174X/pdf?md5=5f89016bbfa108ec45b31e4d154d1b11&pid=1-s2.0-S221282711631174X-main.pdf&_valck=1"
    },
    {
      "title": "The Application Center Industrie 4.0-Industry-driven manufacturing, research and development",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827116311593",
      "authors": [
        {
          "name": "M Landherr",
          "url": ""
        },
        {
          "name": "U Schneider",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2016",
          "url": ""
        }
      ],
      "description": "The industrial production of personalized goods is a great opportunity for manufacturing companies to strengthen their competitive position. This requires a very high degree of flexibility in the whole value-adding system. The massive digitization of production enables�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S2212827116311593/pdf?md5=de813d793c329e2179737d7dcc71f27c&pid=1-s2.0-S2212827116311593-main.pdf&_valck=1"
    },
    {
      "title": "Method for designing an energy-agile energy system for industrial manufacturing",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827115000438",
      "authors": [
        {
          "name": "T Kuhlmann",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2015",
          "url": ""
        }
      ],
      "description": "A volatile energy supply, where increasing energy costs take a high toll, as well as rapidly changing energy-related technologies are posing new challenges to sustainable manufacturing. The complex interactions between energy-related issues–such as�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S2212827115000438/pdf?md5=7896e0fc9a7f05f32aca7b23dc91e839&isDTMRedir=Y&pid=1-s2.0-S2212827115000438-main.pdf&_valck=1"
    },
    {
      "title": "Numerical and experimental study of spray coating using air-assisted high-pressure atomizers",
      "url": "http://www.dl.begellhouse.com/journals/6a7c7e10642258cc,46bae12102de2f99,08781cfa736aa14e.html",
      "authors": [
        {
          "name": "Q Ye",
          "url": ""
        },
        {
          "name": "B Shen",
          "url": ""
        },
        {
          "name": "O Tiedje",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#x2026;&#xFFFD;- Atomization and&#xFFFD;&#x2026;",
          "url": ""
        },
        {
          "name": "2015",
          "url": ""
        }
      ],
      "description": "Airless and air-assisted high-pressure spray guns are widely used in the spray painting industry. The present contribution summarizes ongoing investigations on the spray painting processes of these two atomizers using real paint material. Atomization processes under�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "http://ilasseurope.org/ICLASS/iclass2012_Heidelberg/Contributions/Paper-pdfs/Contribution1394_b.pdf"
    },
    {
      "title": "New Fiber Matrix Process with 3D Fiber Printer–A Strategic In-process Integration of Endless Fibers Using Fused Deposition Modeling (FDM)",
      "url": "https://link.springer.com/chapter/10.1007/978-3-642-41329-2_17",
      "authors": [
        {
          "name": "A Fischer",
          "url": ""
        },
        {
          "name": "S Rommel",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Digital Product and Process&#xFFFD;&#x2026;",
          "url": ""
        },
        {
          "name": "2013",
          "url": ""
        }
      ],
      "description": "Product manufacturers are faced with a constant decrease in product development time, short product life cycles and an increase of complexity of the products. At the same time, it is becoming more and more difficult to justify the expected product features while satisfying the�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://link.springer.com/content/pdf/10.1007/978-3-642-41329-2_17.pdf"
    },
    {
      "title": "Criticality of material resources in industrial enterprises–Structural basics of an operational model",
      "url": "https://www.sciencedirect.com/science/article/pii/S221282711630004X",
      "authors": [
        {
          "name": "R Miehe",
          "url": ""
        },
        {
          "name": "R Schneider",
          "url": ""
        },
        {
          "name": "F Baaij",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2016",
          "url": ""
        }
      ],
      "description": "Resource use in industries is attended by various risks for companies. Sustainable decision making thus requires a valid information basis. Most companies, however, neglect major information concerning the application of resources. While many analysis in this area have�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S221282711630004X/pdf?md5=efaa05b15743c50f43b13b315c7d74f0&isDTMRedir=Y&pid=1-s2.0-S221282711630004X-main.pdf&_valck=1"
    },
    {
      "title": "Complexity patterns in the advanced complexity management of value networks",
      "url": "https://core.ac.uk/download/pdf/82370337.pdf",
      "authors": [
        {
          "name": "J J&#xFFFD;ger",
          "url": ""
        },
        {
          "name": "A Kluth",
          "url": ""
        },
        {
          "name": "A Schatz",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2014",
          "url": ""
        }
      ],
      "description": "The way of dealing with the strongly increasing complexity of the company itself and its environment has become a key competitive factor. Complexity factors in a variety of different business areas require an advanced Complexity Management. Therefore, knowledge�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://core.ac.uk/download/pdf/82370337.pdf"
    },
    {
      "title": "Ecosystems, Strategy and Business Models in the age of Digitization-How the Manufacturing Industry is Going to Change its Logic",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827116311568",
      "authors": [
        {
          "name": "D Paulus-Rohmer",
          "url": ""
        },
        {
          "name": "H Schatton",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2016",
          "url": ""
        }
      ],
      "description": "The digital transformation of people's everyday life is progressing; almost everybody uses connected devices, shares information and builds a network according to the existing preferences or needs. A similar development takes place in the industrial environment, eg�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S2212827116311568/pdf?md5=a8b2e0905518169fd522752beb5b6d14&pid=1-s2.0-S2212827116311568-main.pdf&_valck=1"
    },
    {
      "title": "WGP-Standpunkt Industrie 4.0",
      "authors": [
        {
          "name": "T Bauernhansl",
          "url": ""
        }
      ],
      "description": "",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Production Scheduling in Complex Job Shops from an Industry 4.0 Perspective: A Review and Challenges in the Semiconductor Industry.",
      "url": "http://ceur-ws.org/Vol-1793/paper3.pdf",
      "authors": [
        {
          "name": "B Waschneck",
          "url": ""
        },
        {
          "name": "T Altenm&#xFFFD;ller",
          "url": ""
        },
        {
          "name": "T Bauernhansl",
          "url": ""
        },
        {
          "name": "A Kyek&#xFFFD;- SAMI@ iKNOW",
          "url": ""
        },
        {
          "name": "2016",
          "url": ""
        }
      ],
      "description": "Page 1. Production Scheduling in Complex Job Shops from an Industrie 4.0 Perspective: A\nReview and Challenges in the Semiconductor Industry Bernd Waschneck ∗ Graduate School\nadvanced Manufacturing Engineering (GSaME) - Universit�t Stuttgart Nobelstr. 12 70569�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "http://ceur-ws.org/Vol-1793/paper3.pdf"
    },
    {
      "title": "Gesch�ftsmodell-Innovation durch Industrie 4.0: Chancen und Risiken f�r den Maschinen-und Anlagenbau",
      "authors": [
        {
          "name": "",
          "url": ""
        }
      ],
      "description": "",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Cell dispensing in low-volume range with the immediate drop-on-demand technology (I-DOT)",
      "url": "http://journals.sagepub.com/doi/abs/10.1177/2211068214562450",
      "authors": [
        {
          "name": "L Schober",
          "url": ""
        },
        {
          "name": "E B&#xFFFD;ttner",
          "url": ""
        },
        {
          "name": "C Laske&#x2026;&#xFFFD;- Journal of&#xFFFD;&#x2026;",
          "url": ""
        },
        {
          "name": "2015",
          "url": ""
        }
      ],
      "description": "Handling and dosing of cells comprise the most critical step in the microfabrication of cell-based assay systems for screening and toxicity testing. Therefore, the immediate drop-on-demand technology (I-DOT) was developed to provide a flexible noncontact liquid handling�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "http://journals.sagepub.com/doi/pdf/10.1177/2211068214562450"
    },
    {
      "title": "Changeable and reconfigurable assembly systems–A structure planning approach in automotive manufacturing",
      "url": "https://link.springer.com/chapter/10.1007/978-3-658-08844-6_81",
      "authors": [
        {
          "name": "P Foith-F&#xFFFD;rster",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- 15. Internationales Stuttgarter Symposium",
          "url": ""
        },
        {
          "name": "2015",
          "url": ""
        }
      ],
      "description": "The ability of a manufacturing system to cope with frequently changing or increasing product variants and changing production volumes is a key competitive factor in today's volatile operational environment. After giving an introduction into the concept of changeability and�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Automated Provision and Exchange of Energy Information throughout the Production Process",
      "url": "https://link.springer.com/chapter/10.1007/978-3-642-29069-5_65",
      "authors": [
        {
          "name": "P Ebersp&#xFFFD;cher",
          "url": ""
        },
        {
          "name": "H Haag",
          "url": ""
        },
        {
          "name": "R Rah&#xFFFD;user&#x2026;&#xFFFD;- &#x2026;&#xFFFD;Technology for a&#xFFFD;&#x2026;",
          "url": ""
        },
        {
          "name": "2012",
          "url": ""
        }
      ],
      "description": "To ensure increasing energy efficiency in production it is necessary to aim for an energy optimal planning and control, consumption monitoring and efficiency evaluation of the entire production process. To achieve this goal an overall assessment, use and provision of�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Movement towards service-orientation and app-orientation in manufacturing IT",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827116306977",
      "authors": [
        {
          "name": "D Bauer",
          "url": "https://scholar.google.com/citations?user=TdAa18gAAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "D Stock",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2017",
          "url": ""
        }
      ],
      "description": "Current trends in production eg the shift to mass personalization lead to significant changes in manufacturing IT. The traditional automation pyramid is dissolving and manufacturing IT is moving towards service-orientation and app-orientation. To support especially small and�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S2212827116306977/pdf?md5=3f21723eacc4034b011b4bbe7f8314ec&isDTMRedir=Y&pid=1-s2.0-S2212827116306977-main.pdf&_valck=1"
    },
    {
      "title": "Change Management through Learning Factories",
      "url": "https://link.springer.com/chapter/10.1007/978-3-319-02054-9_67",
      "authors": [
        {
          "name": "M Dinkelmann",
          "url": ""
        },
        {
          "name": "J Siegert",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- &#x2026;&#xFFFD;Competitiveness and Economic&#xFFFD;&#x2026;",
          "url": ""
        },
        {
          "name": "2014",
          "url": ""
        }
      ],
      "description": "In today's ever faster changing economy it is crucial to adapt the production of a company in shorter intervals. Many change processes fail, often due to the resistance of the workforce. Approaches on the field of change management address this issue, but do often not�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Wear@ Work–A new approach for data acquisition using wearables",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827116303092",
      "authors": [
        {
          "name": "D Bauer",
          "url": "https://scholar.google.com/citations?user=TdAa18gAAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "R Wutzke",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2016",
          "url": ""
        }
      ],
      "description": "Smart data acquisition is an important tool for companies in international competition as it allows new ways of creating machine understandable knowledge as well as revealing unexploited optimization potential. Furthermore, the current movements in production to�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S2212827116303092/pdf?md5=56dc0b14538b2cda1eac8705f355eb8f&isDTMRedir=Y&pid=1-s2.0-S2212827116303092-main.pdf&_valck=1"
    },
    {
      "title": "Planning of workstations in a modular automotive assembly system",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827116312112",
      "authors": [
        {
          "name": "W Kern",
          "url": ""
        },
        {
          "name": "F Rusitschka",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2016",
          "url": ""
        }
      ],
      "description": "In a turbulent market environment an assembly system with a high level of flexibility and changeability is necessary. Especially in the automotive industry the developments towards product differentiation and shorter product lifecycles require highly flexible and changeable�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S2212827116312112/pdf?md5=c41ca12709c934d35955accd42d8be89&pid=1-s2.0-S2212827116312112-main.pdf&_valck=1"
    },
    {
      "title": "The Eco Lean Method–A Combined Approach for Low Cost Economic and Ecologic Optimization in the Manufacturing Industry",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827116312604",
      "authors": [
        {
          "name": "R Miehe",
          "url": ""
        },
        {
          "name": "I Bogdanov",
          "url": ""
        },
        {
          "name": "R Schneider",
          "url": ""
        },
        {
          "name": "M Hirsch&#x2026;&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2016",
          "url": ""
        }
      ],
      "description": "Rising resource efficiency is essential for a future green economy. Research and business activities in this field have thus increased dramatically during the past decades. While most environmentally oriented methods suffice to provide deep transparency, few have the ability�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S2212827116312604/pdf?md5=8f9e2f294392088dc65b0c206842422c&pid=1-s2.0-S2212827116312604-main.pdf&_valck=1"
    },
    {
      "title": "Lernfabrik advanced Industrial Engineering",
      "authors": [
        {
          "name": "",
          "url": ""
        }
      ],
      "description": "",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Energieeffizienz in Deutschland-eine Metastudie: Analyse und Empfehlungen",
      "url": "https://books.google.com/books?hl=en&lr=&id=DuAoBAAAQBAJ&oi=fnd&pg=PA1&dq=%22thomas+bauernhansl%22&ots=tSsoHE9j4z&sig=pj6-uh3bNydQ041zcRsmJO-hsNk",
      "authors": [
        {
          "name": "T Bauernhansl",
          "url": ""
        }
      ],
      "description": "Das Stuttgarter Institut f�r Energieeffizienz in der Produktion hat die erste Metastudie „Energieeffizienz in Deutschland “erarbeitet. Sie liefert Zahlen, Daten und Fakten zum Entwicklungs-und Kenntnisstand der Energieeffizienz in Deutschland. Die Studie zeigt auf�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Individuelle Softwareunterst�tzung f�r jeden Ingenieur",
      "url": "http://www.hanser-elibrary.com/doi/abs/10.3139/104.110824",
      "authors": [
        {
          "name": "M Landherr",
          "url": ""
        },
        {
          "name": "M Neumann",
          "url": ""
        },
        {
          "name": "J Volkmann&#x2026;&#xFFFD;- ZWF Zeitschrift f&#xFFFD;r&#xFFFD;&#x2026;",
          "url": ""
        },
        {
          "name": "2012",
          "url": ""
        }
      ],
      "description": "Die zuk�nftige Produktionstechnik erfordert neue Arbeitsweisen von Ingenieuren. Sie zeichnen sich durch Mobilit�t, Interdisziplinarit�t und Kooperation aus. In diesem Beitrag wird als Antwort auf diese Anforderungen eine Plattform vorgestellt, welche die�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Engineering Environment for Production System Planning in Small and Medium Enterprises",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827115006642",
      "authors": [
        {
          "name": "D Goerzig",
          "url": ""
        },
        {
          "name": "D Lucke",
          "url": ""
        },
        {
          "name": "J Lenz",
          "url": "https://scholar.google.com/citations?user=lI_KdfIAAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "T Denner",
          "url": ""
        },
        {
          "name": "M Lickefett&#x2026;&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2015",
          "url": ""
        }
      ],
      "description": "Today, factories have to be adapted permanently in order to follow the developments towards fast changing customer demands and faster life cycles of products. Key aspects to cope with these developments are the reduction of the unit costs and the planning duration�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S2212827115006642/pdf?md5=7c549d68ccc4358189b8e9b81b1e0051&isDTMRedir=Y&pid=1-s2.0-S2212827115006642-main.pdf&_valck=1"
    },
    {
      "title": "Risk-value-cost-based optimization of global value-adding structures",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827113002254",
      "authors": [
        {
          "name": "A Prinz",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2013",
          "url": ""
        }
      ],
      "description": "Present methodologies do not adequately take qualitative factors into account in optimizing the distribution of value-added activities. This is where the method currently developed by the Fraunhofer IPA for a risk-value-cost-based optimization of global production networks�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S2212827113002254/pdf?md5=7f467a05a0fd19563b2ba0fd37d0ff31&isDTMRedir=Y&pid=1-s2.0-S2212827113002254-main.pdf&_valck=1"
    },
    {
      "title": "Integration of CNT-based actuators for bio-medical applications—Example printed circuit board CNT actuator pipette",
      "url": "https://ieeexplore.ieee.org/abstract/document/6878284/",
      "authors": [
        {
          "name": "R Addinall",
          "url": ""
        },
        {
          "name": "T Sugino",
          "url": ""
        },
        {
          "name": "R Neuhaus&#x2026;&#xFFFD;- &#x2026;&#xFFFD;(AIM)",
          "url": ""
        },
        {
          "name": "2014 IEEE&#xFFFD;&#x2026;",
          "url": ""
        },
        {
          "name": "2014",
          "url": ""
        }
      ],
      "description": "In order to strengthen the position of CNT actuator technology and fasten the transfer of scientific results into application development and market introduction scientific institutes AIST Kansai and Fraunhofer IPA cooperated in the field of electroactive polymers�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.researchgate.net/profile/Raphael_Neuhaus/publication/268196408_Integration_of_CNT-based_actuators_for_bio-medical_applications_-_Example_printed_circuit_board_CNT_actuator_pipette/links/55ed98f308aeb6516268f601.pdf"
    },
    {
      "title": "Automotive industry without conveyer belt and cycle–research campus ARENA2036",
      "url": "https://link.springer.com/chapter/10.1007/978-3-658-08844-6_79",
      "authors": [
        {
          "name": "T Bauernhansl&#xFFFD;- 15. Internationales Stuttgarter Symposium",
          "url": ""
        },
        {
          "name": "2015",
          "url": ""
        }
      ],
      "description": "The main driver within the framework of integrated industry (Industrie 4.0) is a holistic and integrated resource efficiency. The production of the future is based on flexible and highly qualified staff which will operate intelligently automated processes. The future of the digital�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Handbuch Industrie 4.0 Bd. 4",
      "url": "https://link.springer.com/content/pdf/10.1007/978-3-662-53254-6.pdf",
      "authors": [
        {
          "name": "B Vogel-Heuser",
          "url": "https://scholar.google.com/citations?user=_MFvvVcAAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "T Bauernhansl",
          "url": ""
        },
        {
          "name": "M Ten Hompel",
          "url": ""
        }
      ],
      "description": "Vogel-Heuser) erschienen ist, wurde ein wichtiger Schritt unternommen, das Thema Industrie 4.0 in der Fachliteratur zu verankern. Doch bereits damals war uns als Herausgebern klar, dass ein statisches Buch einer Entwicklung dieser Tragweite und�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Bewertung von Synergiepotenzialen im Maschinenbau",
      "url": "https://books.google.com/books?hl=en&lr=&id=rcwiBgAAQBAJ&oi=fnd&pg=PA45&dq=%22thomas+bauernhansl%22&ots=ATjRQicKZk&sig=jyXmZo13Pe3ixCSX3fAma1CzCQA",
      "authors": [
        {
          "name": "T Bauernhansl",
          "url": ""
        }
      ],
      "description": "Thomas Bauernhansl pr�sentiert eine quantitative Bewertungsgrundlage, anhand derer sich Synergiepotenziale in Maschinenbauunternehmen in den Feldern Rationalisierung, Technologie, Innovation und Markt durch monet�re Gr��en ausweisen und durch die�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Handbuch Industrie 4.0 Bd. 1",
      "url": "https://link.springer.com/content/pdf/10.1007/978-3-662-53248-5.pdf",
      "authors": [
        {
          "name": "B Vogel-Heuser",
          "url": "https://scholar.google.com/citations?user=_MFvvVcAAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "T Bauernhansl",
          "url": ""
        },
        {
          "name": "M Ten Hompel",
          "url": ""
        }
      ],
      "description": "Vogel-Heuser) erschienen ist, wurde ein wichtiger Schritt unternommen, das Thema Industrie 4.0 in der Fachliteratur zu verankern. Doch bereits damals war uns als Herausgebern klar, dass ein statisches Buch einer Entwicklung dieser Tragweite und�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Gesch�ftsmodell-Innovation durch Industrie 4.0",
      "authors": [
        {
          "name": "",
          "url": ""
        }
      ],
      "description": "",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Komplexit�t bewirtschaften–Industrie 4.0 und die Folgen",
      "url": "http://www.hanser-elibrary.com/doi/abs/10.3139/104.111140",
      "authors": [
        {
          "name": "T Bauernhansl",
          "url": ""
        },
        {
          "name": "A Schatz",
          "url": ""
        },
        {
          "name": "J J&#xFFFD;ger&#xFFFD;- ZWF Zeitschrift f&#xFFFD;r&#xFFFD;&#x2026;",
          "url": ""
        },
        {
          "name": "2014",
          "url": ""
        }
      ],
      "description": "Aktuelle Ans�tze des Komplexit�tsmanagements vernachl�ssigen h�ufig den positiven Einfluss von Komplexit�t auf die Wettbewerbsf�higkeit von Unternehmen. Dieser Beitrag stellt den neuen Ansatz der „Komplexit�tsbewirtschaftung “in soziotechnischen Systemen�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Enterprise architectures for the digital transformation in small and medium-sized enterprises",
      "url": "http://iranarze.ir/wp-content/uploads/2018/08/E9133-IranArze.pdf",
      "authors": [
        {
          "name": "D Goerzig",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2018",
          "url": ""
        }
      ],
      "description": "The transformation towards smart connected factories causes enormous changes in mechanical engineering industry starting from the development of cyber-physical production systems up to their application in production. Enterprise architectures already offer suitable�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "http://iranarze.ir/wp-content/uploads/2018/08/E9133-IranArze.pdf"
    },
    {
      "title": "Real Option-Based Evaluation of Eco-Oriented Investment Using the Example of Closed-Loop Supply Chains",
      "url": "https://www.sciencedirect.com/science/article/pii/S221282711500671X",
      "authors": [
        {
          "name": "M Weskamp",
          "url": ""
        },
        {
          "name": "AT Braun",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2015",
          "url": ""
        }
      ],
      "description": "Natural resources should be used as effectively as possible along the entire supply chain. One approach to keep the resources on a high value-added level is the extension of classical supply chains to closed-loop supply chains, covering the whole product life cycle�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S221282711500671X/pdf?md5=0d81726e6ca4c53823d861b75847b831&isDTMRedir=Y&pid=1-s2.0-S221282711500671X-main.pdf&_valck=1"
    },
    {
      "title": "Mixed Reality for On-Site Self-Instruction and Self-Inspection with Building Information Models",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827118303184",
      "authors": [
        {
          "name": "G Riexinger",
          "url": ""
        },
        {
          "name": "A Kluth",
          "url": ""
        },
        {
          "name": "M Olbrich",
          "url": "https://scholar.google.com/citations?user=d75zDsQAAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "JD Braun&#x2026;&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2018",
          "url": ""
        }
      ],
      "description": "Mixed Reality (MR) solutions for the manufacturing domain aim to support the construction, production and maintenance processes of factories, its equipment and products. Within the European project “INSITER”, Fraunhofer developed visualization solutions and MR�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Changing requirements of competence building due to an increase of personalized products",
      "url": "https://www.sciencedirect.com/science/article/pii/S2351978917301300",
      "authors": [
        {
          "name": "E Gro&#xFFFD;",
          "url": ""
        },
        {
          "name": "J Siegert",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia Manufacturing",
          "url": ""
        },
        {
          "name": "2017",
          "url": ""
        }
      ],
      "description": "This article discusses the development of Taylorism from classical Taylorism to New Taylorism (Digital Taylorism) and leads to rethinking the development of Taylorism. The increasing individualization of products and shorter product life cycles lead to an increasing�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S2351978917301300/pdf?md5=1ceb8b23c415d74ef799e45f5f9d8909&isDTMRedir=Y&pid=1-s2.0-S2351978917301300-main.pdf&_valck=1"
    },
    {
      "title": "A Framework for Integration of Additive Manufacturing Technologies in Production Networks",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827116312847",
      "authors": [
        {
          "name": "P Spalt",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2016",
          "url": ""
        }
      ],
      "description": "Flexibility in manufacturing operations is becoming increasingly important to industrial firms, due to eg, increasing market demand volatility and shorter product life cycles. Additive manufacturing technologies show great potential in adding flexibility to manufacturing�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S2212827116312847/pdf?md5=4b2c6c3981f4890403cc91bc108e8736&pid=1-s2.0-S2212827116312847-main.pdf&_valck=1"
    },
    {
      "title": "Optimal configuration of manufacturing cells for high flexibility and cost reduction by component substitution",
      "url": "https://www.sciencedirect.com/science/article/pii/S221282711501121X",
      "authors": [
        {
          "name": "P Holtewert",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2016",
          "url": ""
        }
      ],
      "description": "In the current competitive market manufacturing companies are driven by significant price pressure as well as high fluctuation in demand and are faced with the challenge of producing cost-effectively. Especially serial and variant manufacturers struggle to achieve�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S221282711501121X/pdf?md5=75b9eff032b583fe518cb8c7f5dea469&isDTMRedir=Y&pid=1-s2.0-S221282711501121X-main.pdf&_valck=1"
    },
    {
      "title": "Exact method for the vehicle routing problem with mixed linehaul and backhaul customers, heterogeneous fleet, time window and manufacturing capacity",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827115011191",
      "authors": [
        {
          "name": "J Oesterle",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2016",
          "url": ""
        }
      ],
      "description": "Due to concerns over food safety, quality, and transparency, the food industry has been challenged to deal with an increased complexity in its logistics and production planning. This complexity is mostly associated to the task of optimally exploring a highly constrained�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S2212827115011191/pdf?md5=6b3df1ef270e2f206ea17f6af2ecee38&isDTMRedir=Y&pid=1-s2.0-S2212827115011191-main.pdf&_valck=1"
    },
    {
      "title": "An Integrated Logistics Concept for a Modular Assembly System",
      "url": "https://www.sciencedirect.com/science/article/pii/S2351978917304080",
      "authors": [
        {
          "name": "W Kern",
          "url": ""
        },
        {
          "name": "H L&#xFFFD;mmermann",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia Manufacturing",
          "url": ""
        },
        {
          "name": "2017",
          "url": ""
        }
      ],
      "description": "The trend towards product differentiation in the automotive industry increases the complexity in its assembly and logistics. Hence, more flexible systems are required and already in development. Based on the requirements of a modular assembly system, an adapted�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S2351978917304080/pdf?md5=2621aab83a8f8e363bc09fb94a925da2&pid=1-s2.0-S2351978917304080-main.pdf&_valck=1"
    },
    {
      "title": "Industrie 4.0: Entwicklungsfelder f�r den Mittelstand",
      "authors": [
        {
          "name": "",
          "url": ""
        }
      ],
      "description": "",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Industrie 4.0: Nur ein Medienhype oder die sch�ne neue Produktionswelt",
      "authors": [
        {
          "name": "",
          "url": ""
        }
      ],
      "description": "",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Energieeffizienz in Deutschland",
      "authors": [
        {
          "name": "",
          "url": ""
        }
      ],
      "description": "",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Generic Data Model for Describing Real-Time Data-Supported Power Flexibility",
      "url": "https://www.fim-rc.de/Paperbibliothek/Veroeffentlicht/746/wi-746.pdf",
      "authors": [
        {
          "name": "T Weber",
          "url": ""
        },
        {
          "name": "D Schel",
          "url": ""
        },
        {
          "name": "P Schott",
          "url": "https://scholar.google.com/citations?user=zR4wn8AAAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "D Bauer",
          "url": "https://scholar.google.com/citations?user=TdAa18gAAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "J Pullmann&#x2026;&#xFFFD;- Smart Energy&#xFFFD;&#x2026;",
          "url": ""
        },
        {
          "name": "2018",
          "url": ""
        }
      ],
      "description": "Page 1. W I-746 University of Augsburg, D-86135 Augsburg Visitors: Universit�tsstr. 12, 86159\nAugsburg Phone: +49 821 598-4801 (Fax: -4899) University of Bayreuth, D-95440 Bayreuth\nVisitors: Wittelsbacherring 10, 95444 Bayreuth Phone: +49 921 55-4710 (Fax: -844710)�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Increase of Capacity Flexibility in Manufacturing Systems by Substitution of Product Functions",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827116311702",
      "authors": [
        {
          "name": "P Holtewert",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2016",
          "url": ""
        }
      ],
      "description": "In the current competitive market manufacturing companies are driven by significant price pressure as well as high fluctuation in demand. They are faced with the challenge of producing products cost-effectively. Especially, serial and variant manufacturers strive for�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S2212827116311702/pdf?md5=51a8953d1e0e3c18dd72cd8a1d488f5c&pid=1-s2.0-S2212827116311702-main.pdf&_valck=1"
    },
    {
      "title": "Hybrid multi-objective optimization method for solving simultaneously the line balancing, equipment and buffer sizing problems for hybrid assembly systems",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827116312264",
      "authors": [
        {
          "name": "J Oesterle",
          "url": ""
        },
        {
          "name": "T Bauernhansl",
          "url": ""
        },
        {
          "name": "L Amodeo",
          "url": "https://scholar.google.com/citations?user=px9XzCsAAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "2016",
          "url": ""
        }
      ],
      "description": "In today's dynamic and uncertain markets, companies are required to regularly renew their product and process platforms through new production technologies and factory infrastructure. This results in shortening products', processes' and factories life cycle�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S2212827116312264/pdf?md5=65981f0d9933c0190d1e301155b88754&pid=1-s2.0-S2212827116312264-main.pdf&_valck=1"
    },
    {
      "title": "Axiomatic design approach for human-robot collaboration in flexibly linked assembly layouts",
      "url": "https://core.ac.uk/download/pdf/81968708.pdf",
      "authors": [
        {
          "name": "M Fechter",
          "url": ""
        },
        {
          "name": "P Foith-F&#xFFFD;rster",
          "url": ""
        },
        {
          "name": "MS Pfeiffer",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2016",
          "url": ""
        }
      ],
      "description": "The fluctuation of markets and increasing product variants result in uncertain production volumes. Production systems must be able to continually rescale their output without loss of efficiency. This paper presents an axiomatic design approach to allocate complex final�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://core.ac.uk/download/pdf/81968708.pdf"
    },
    {
      "title": "Approach for implementing a control and optimization loop for an energy-efficient factory",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827115005314",
      "authors": [
        {
          "name": "S Wahren",
          "url": ""
        },
        {
          "name": "J Siegert",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2015",
          "url": ""
        }
      ],
      "description": "Abstract Information about the energy performance of individual processes in a production system is only insufficiently available. To solve this problem, a holistic approach has been developed enabling operators to continuously monitor a factory's energy consumption. The�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S2212827115005314/pdf?md5=62c9a000c0117344ad9ff7fd75e0953a&isDTMRedir=Y&pid=1-s2.0-S2212827115005314-main.pdf&_valck=1"
    },
    {
      "title": "Changeable assembly systems through flexibly linked process modules",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827115012032",
      "authors": [
        {
          "name": "P Foith-F&#xFFFD;rster",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2016",
          "url": ""
        }
      ],
      "description": "Fast changing markets and the trend towards increasing individualization of products make the ability to adapt the production program a key competitive factor of industrial enterprises. Rigidly coupled production lines, as often found in mass production, reach the limits of their�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S2212827115012032/pdf?md5=4bc692c524cdc5b4579a8450759706cb&isDTMRedir=Y&pid=1-s2.0-S2212827115012032-main.pdf&_valck=1"
    },
    {
      "title": "Towards a Rule-based Manufacturing Integration Assistant",
      "url": "https://www.sciencedirect.com/science/article/pii/S221282711631191X",
      "authors": [
        {
          "name": "M Wieland",
          "url": "https://scholar.google.com/citations?user=NpUAQhcAAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "P Hirmer",
          "url": "https://scholar.google.com/citations?user=RtpjiGkAAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "F Steimle",
          "url": ""
        },
        {
          "name": "C Gr�ger",
          "url": "https://scholar.google.com/citations?user=iVBg1-kAAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "B Mitschang",
          "url": "https://scholar.google.com/citations?user=zRbR5b8AAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "2016",
          "url": ""
        }
      ],
      "description": "Recent developments and steadily declining prices in ICT enable an economic application of advanced digital tools in wide areas of manufacturing. Solutions based on concepts and technologies of the “Internet of Things” or “cyber physical systems” can be used to�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S221282711631191X/pdf?md5=2e0efa59538274e9675e09f225fab1e5&pid=1-s2.0-S221282711631191X-main.pdf&_valck=1"
    },
    {
      "title": "The proximity paradox: Balancing auto suppliers' manufacturing networks",
      "authors": [
        {
          "name": "D Spindelndreier",
          "url": ""
        },
        {
          "name": "T Bauernhansl",
          "url": ""
        },
        {
          "name": "M Beck",
          "url": ""
        },
        {
          "name": "et al.",
          "url": ""
        }
      ],
      "description": "",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Weckruf f�r Unternehmen",
      "url": "http://www.hanser-elibrary.com/doi/abs/10.3139/104.111553",
      "authors": [
        {
          "name": "T Bauernhansl&#xFFFD;- ZWF Zeitschrift f&#xFFFD;r wirtschaftlichen&#xFFFD;&#x2026;",
          "url": ""
        },
        {
          "name": "2016",
          "url": ""
        }
      ],
      "description": "Kleine und mittlere Unternehmen aus dem Produktionsbereich sind gegen�ber Industrie 4.0 noch viel zu zur�ckhaltend. Der WGP-Standpunkt Industrie 4.0 [1], dessen einleitende Kapitel hier gek�rzt und leicht angepasst wiedergegeben werden, ist ein Weckruf f�r die�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Energieeffizienz in Deutschland: Ausgew�hlte Ergebnisse einer Analyse von mehr als 250 Ver�ffentlichungen",
      "authors": [
        {
          "name": "",
          "url": ""
        }
      ],
      "description": "",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Energieeffizienz in Deutschland–eine Metastudie",
      "url": "https://link.springer.com/content/pdf/10.1007/978-3-662-48883-6.pdf",
      "authors": [
        {
          "name": "A Sauer",
          "url": "https://scholar.google.com/citations?user=FPXJ9LQAAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Energieeffizienz in Deutschland-eine Metastudie",
          "url": ""
        },
        {
          "name": "2016",
          "url": ""
        }
      ],
      "description": "Neben den Energie-und Klimakonzepten und Richtlinien auf europ�ischer und Bundesebene sind es vor allem die �berf�lligen Beschl�sse des Pariser Klimaabkommens, die eine deutliche Senkung des Energieverbrauchs erforderlich machen. Anders als bisher�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Usage of analytical services in industry today and tomorrow",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827116312021",
      "authors": [
        {
          "name": "E Colangelo",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2016",
          "url": ""
        }
      ],
      "description": "Data is everywhere. Both, machines and men leave a digital shadow behind, which, for some means the success or failure of their business. Enterprises strive to make the most of this scattered, diverse and ever growing data, in order to obtain information they can apply to�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S2212827116312021/pdf?md5=87a8d94b996d04c0b16d97b81b2d04fa&pid=1-s2.0-S2212827116312021-main.pdf&_valck=1"
    },
    {
      "title": "Challenges of Production Microservices",
      "url": "https://www.researchgate.net/profile/Dennis_Bauer3/publication/323922607_Challenges_of_Production_Microservices/links/5ab4fbe40f7e9b68ef4be2a7/Challenges-of-Production-Microservices.pdf",
      "authors": [
        {
          "name": "B G&#xFFFD;tz",
          "url": ""
        },
        {
          "name": "D Schel",
          "url": ""
        },
        {
          "name": "D Bauer",
          "url": "https://scholar.google.com/citations?user=TdAa18gAAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "C Henkel",
          "url": "https://scholar.google.com/citations?user=t2UK-dwAAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "P Einberger&#x2026;&#xFFFD;- Procedia&#xFFFD;&#x2026;",
          "url": ""
        },
        {
          "name": "2018",
          "url": ""
        }
      ],
      "description": "Current production systems use monolithic software solutions. This causes a lack of flexibility, scalability and prevents direct communication between network nodes which is fundamental to face challenges of highly personalized mass production. In order to�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.researchgate.net/profile/Dennis_Bauer3/publication/323922607_Challenges_of_Production_Microservices/links/5ab4fbe40f7e9b68ef4be2a7/Challenges-of-Production-Microservices.pdf"
    },
    {
      "title": "Mobilizing SMEs Towards Industrie 4.0-enabled Smart Products",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827117306571",
      "authors": [
        {
          "name": "A Issa",
          "url": ""
        },
        {
          "name": "D Lucke",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2017",
          "url": ""
        }
      ],
      "description": "Today, small and medium-sized enterprises (SMEs) are the bedrock of most economies. Additionally, they have the potential to become the foundation of sustainable economic growth if given the right tools and support. In order to stay competitive, SMEs have to adapt�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S2212827117306571/pdf?md5=281cd568ed7a6749048ebf3e0d840d79&pid=1-s2.0-S2212827117306571-main.pdf&_valck=1"
    },
    {
      "title": "Situation-based Methodology for Planning the Commissioning of Special Machinery Using Bayesian Networks",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827116311970",
      "authors": [
        {
          "name": "S Poeschl",
          "url": ""
        },
        {
          "name": "F Wirth",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2016",
          "url": ""
        }
      ],
      "description": "Abstract In German mechanical engineering customized systems and integration solutions are the biggest trends which are mainly applied in special machinery. This paper shows a method to decrease test and commissioning time by using expert knowledge and by�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S2212827116311970/pdf?md5=dff8776bd3be9520638ae28279d140fa&pid=1-s2.0-S2212827116311970-main.pdf&_valck=1"
    },
    {
      "title": "Flexible IT-platform to Synchronize Energy Demands with Volatile Markets",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827117302342",
      "authors": [
        {
          "name": "D Bauer",
          "url": "https://scholar.google.com/citations?user=TdAa18gAAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "E Abele",
          "url": ""
        },
        {
          "name": "R Ahrens",
          "url": ""
        },
        {
          "name": "T Bauernhansl",
          "url": ""
        },
        {
          "name": "G Fridgen&#x2026;&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2017",
          "url": ""
        }
      ],
      "description": "Based on the goal of exiting nuclear and fossil energies within the electricity generation, the percentage of renewable energies in the energy mix rises. Due to renewable energies' dependence on natural resources like sun or wind this development leads to a volatile�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S2212827117302342/pdf?md5=6e76cb8236ce3c6b99b416251ef2ae77&isDTMRedir=Y&pid=1-s2.0-S2212827117302342-main.pdf&_valck=1"
    },
    {
      "title": "Standardized coordinate system for factory and production planning",
      "url": "https://www.sciencedirect.com/science/article/pii/S2351978917301506",
      "authors": [
        {
          "name": "J Siegert",
          "url": ""
        },
        {
          "name": "T Schlegel",
          "url": ""
        },
        {
          "name": "E Gro&#xFFFD;",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia Manufacturing",
          "url": ""
        },
        {
          "name": "2017",
          "url": ""
        }
      ],
      "description": "Abstract The Institute of Industrial Manufacturing and Management IFF, which is affiliated with the University of Stuttgart in Germany, has developed a continuous factory coordinate system for adaptable production systems and implemented it in the learning factory�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S2351978917301506/pdf?md5=566122f502a27d22015cd409cfd35f93&isDTMRedir=Y&pid=1-s2.0-S2351978917301506-main.pdf&_valck=1"
    },
    {
      "title": "Opposites Attract: An Approach to Collaborative Supply Chain Management between Semiconductor and Automotive Companies",
      "url": "http://watsonojs.binghamton.edu/index.php/iser/article/view/3",
      "authors": [
        {
          "name": "J Aelker",
          "url": ""
        },
        {
          "name": "V Meister",
          "url": ""
        },
        {
          "name": "C Forster&#x2026;&#xFFFD;- Industrial and&#xFFFD;&#x2026;",
          "url": ""
        },
        {
          "name": "2013",
          "url": ""
        }
      ],
      "description": "This article illustrates the differences between the semiconductor and the automotive industry and the subsequent challenges to their common supply chain. The weak points at the interfaces between the two supply chains will systematically be identified and assessed�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "http://watsonojs.binghamton.edu/index.php/iser/article/download/3/2"
    },
    {
      "title": "KPI-focused Simulation and Management System for Eco-Efficient Design of Energy-Intensive Production Systems",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827115000682",
      "authors": [
        {
          "name": "G Riexinger",
          "url": ""
        },
        {
          "name": "P Holtewert",
          "url": ""
        },
        {
          "name": "A Bruns",
          "url": ""
        },
        {
          "name": "S Wahren",
          "url": ""
        },
        {
          "name": "K Tran&#x2026;&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2015",
          "url": ""
        }
      ],
      "description": "The optimal eco-efficient design of production processes guarantees sustainable and resource-efficient manufacturing systems. Within the scope of the European project “DAPhNE”, Fraunhofer IPA enables eco-efficient design with a new integrated system for the�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S2212827115000682/pdf?md5=7db9db8f481ca27094474b6615c8ade4&isDTMRedir=Y&pid=1-s2.0-S2212827115000682-main.pdf&_valck=1"
    },
    {
      "title": "Interchangeable Product Designs for the Increase of Capacity Flexibility in Production Systems",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827116303201",
      "authors": [
        {
          "name": "P Holtewert",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2016",
          "url": ""
        }
      ],
      "description": "In the current competitive market, production companies are driven by significant price pressure, as well as high fluctuation in demand. They are faced with the challenge of producing products cost-effectively. Serial and variant manufacturers especially strive for�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S2212827116303201/pdf?md5=807784d01cd42c901912dceedc1b29ea&isDTMRedir=Y&pid=1-s2.0-S2212827116303201-main.pdf&_valck=1"
    },
    {
      "title": "Interface Requirements and Planning Framework for the Integration of Non-conventional Processes in Production Lines",
      "url": "https://link.springer.com/chapter/10.1007/978-3-642-29069-5_63",
      "authors": [
        {
          "name": "J B&#xFFFD;ck",
          "url": ""
        },
        {
          "name": "J Siegert",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#x2026;&#xFFFD;- &#x2026;&#xFFFD;Technology for a&#xFFFD;&#x2026;",
          "url": ""
        },
        {
          "name": "2012",
          "url": ""
        }
      ],
      "description": "In manufacturing a constant striving for maximization of adding value is necessary while simultaneously reducing the resource input. The integration of processes is one possible approach to reach this goal. Usually two or more processes are combined in one machine�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Improving Manufacturing SMEs' Competitiveness through Systematic IT Efficiency Evaluation and Advancement",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827113007117",
      "authors": [
        {
          "name": "P D&#xFFFD;rr",
          "url": ""
        },
        {
          "name": "A Braun",
          "url": "https://scholar.google.com/citations?user=93U7alYAAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "E Westk&#xFFFD;mper",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#x2026;&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2013",
          "url": ""
        }
      ],
      "description": "Efficiently exploiting the opportunities opened up by modern IT to support the order fulfillment process is one of the most significant enablers of productivity growth in manufacturing SMEs. However, too often it is not clear how efficiently the installed IT�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S2212827113007117/pdf?md5=e2fad204106e18b6983225ea3dfc67ad&isDTMRedir=Y&pid=1-s2.0-S2212827113007117-main.pdf&_valck=1"
    },
    {
      "title": "Axiomatic approach to flexible and changeable production system design",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827116304255",
      "authors": [
        {
          "name": "P Foith-F&#xFFFD;rster",
          "url": ""
        },
        {
          "name": "M Wiedenmann",
          "url": ""
        },
        {
          "name": "D Seichter&#x2026;&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2016",
          "url": ""
        }
      ],
      "description": "The general increase of products' customization, the reduction of product life cycle spans and dynamically changing markets challenge manufacturers today. Flexible and changeable production equipment addresses these challenges. It is thus necessary to�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S2212827116304255/pdf?md5=4fd5233448ca4281d6cb374834318307&isDTMRedir=Y&pid=1-s2.0-S2212827116304255-main.pdf&_valck=1"
    },
    {
      "title": "Vom Marktteilnehmer zum Marktgestalter",
      "url": "http://www.hanser-elibrary.com/doi/abs/10.3139/104.100475",
      "authors": [
        {
          "name": "W Eversheim",
          "url": ""
        },
        {
          "name": "T Bauernhansl",
          "url": ""
        },
        {
          "name": "C Deckert",
          "url": "https://scholar.google.com/citations?user=tR3BIXYAAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "2001",
          "url": ""
        }
      ],
      "description": "Kurzfassung Der Maschinen-und Anlagenbau hat f�r den Wirtschaftsstandort Deutschland traditionell eine hohe Bedeutung [1]. Bei einem Exportanteil von knapp 70 Prozent hat er einen erheblichen direkten Einfluss auf das Wirtschaftsgef�ge und den Arbeitsmarkt. Zudem�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Wandlungsrelevante Faktoren in produzierenden Unternehmen–Eine Methode zur Identifikation und Analyse als erster Schritt auf dem Weg zur�…",
      "authors": [
        {
          "name": "",
          "url": ""
        }
      ],
      "description": "",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Innovative Ans�tze zur Kompetenzentwicklung f�r die Produktion der Zukunft",
      "url": "http://www.hanser-elibrary.com/doi/abs/10.3139/104.111192",
      "authors": [
        {
          "name": "M Tisch",
          "url": ""
        },
        {
          "name": "S Adolph",
          "url": ""
        },
        {
          "name": "J Metternich&#x2026;&#xFFFD;- ZWF Zeitschrift f&#xFFFD;r&#xFFFD;&#x2026;",
          "url": ""
        },
        {
          "name": "2014",
          "url": ""
        }
      ],
      "description": "Untersuchungen zeigen, dass effiziente Prozesse durch die Optimierung von Maschinen und Anlagen alleine nicht mehr ausreichen, um als Produktionsstandort wettbewerbsf�hig zu sein. Die Analyse der Megatrends weist auf Flexibilit�t, Wandlungsf�higkeit und Effizienz�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Technologische Entwicklungstrends und Besch�ftigung",
      "authors": [
        {
          "name": "",
          "url": ""
        }
      ],
      "description": "",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Handbuch Industrie 4.0 Bd. 2: Automatisierung",
      "url": "https://books.google.com/books?hl=en&lr=&id=9CquDQAAQBAJ&oi=fnd&pg=PR5&dq=%22thomas+bauernhansl%22&ots=3W-cDCXsQs&sig=-htoF2SmVqwf1CywoeK-DWdiL4E",
      "authors": [
        {
          "name": "B Vogel-Heuser",
          "url": "https://scholar.google.com/citations?user=_MFvvVcAAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "T Bauernhansl",
          "url": ""
        },
        {
          "name": "M Ten Hompel",
          "url": ""
        }
      ],
      "description": "Mit der Neuauflage des erfolgreichen Werkes wird die Geschichte der vierten industriellen Revolution fortgeschrieben und der Dynamik Rechnung getragen, mit der diese Vision in den vergangenen zwei bis drei Jahren weiterentwickelt und verwirklicht wurde. Experten�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Approach for capturing the impact of external trends in SME based on change dimensions",
      "url": "http://search.proquest.com/openview/9172295290ab27d50f89e8fb03c86a11/1?pq-origsite=gscholar&cbl=1796422",
      "authors": [
        {
          "name": "OA Rahman",
          "url": ""
        },
        {
          "name": "A Schatz&#x2026;&#xFFFD;- ISPIM Conference&#xFFFD;&#x2026;",
          "url": ""
        },
        {
          "name": "2013",
          "url": ""
        }
      ],
      "description": "Within this work an approach will be described, which identifies and quantifies the impact of external trends on the individual divisions of a company. The core of this approach is the so called\" dimensions of change\". On one hand they create an interface between the�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Requirements for designing a cyber-physical system for competence development",
      "url": "https://www.sciencedirect.com/science/article/pii/S235197891830489X",
      "authors": [
        {
          "name": "T Bauernhansl",
          "url": ""
        },
        {
          "name": "M Tzempetonidou",
          "url": ""
        },
        {
          "name": "T Rossmeissl&#x2026;&#xFFFD;- Procedia&#xFFFD;&#x2026;",
          "url": ""
        },
        {
          "name": "2018",
          "url": ""
        }
      ],
      "description": "The increasing demand for individual products and shorter product life cycles leads to changing requirements concerning skills and competences of workers. Competence development during value adding processes becomes a key success criterion. In the future�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Energy efficiency in Germany-a meta-analysis. Analysis and recommendations",
      "url": "https://inis.iaea.org/search/search.aspx?orig_q=RN:47040551",
      "authors": [
        {
          "name": "T Bauernhansl",
          "url": ""
        }
      ],
      "description": "The Stuttgart Institute of energy efficiency in production compiled the first meta-analysis''Energy Efficiency in Germany''. It provides facts and figures on the development atatus and knowledge level of energy efficiency in Germany. The study shows the�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Substitution and Complementation of Production Management Functions with Data Analytics",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827118303020",
      "authors": [
        {
          "name": "E Colangelo",
          "url": ""
        },
        {
          "name": "T Kr&#xFFFD;ger",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2018",
          "url": ""
        }
      ],
      "description": "Complexity in production systems is steadily growing–one of the drivers is the customer's desire for personalization of products and services. Existing production management systems rely on deterministic functions. Given the diversity and varying influence of these�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Concept and Possible Application of an Automated Framework to Influence Production Dispatch Based on Supply Chain Events",
      "url": "https://www.researchgate.net/profile/Dennis_Bauer3/publication/320015142_Concept_and_Possible_Application_of_an_Automated_Framework_to_Influence_Production_Dispatch_Based_on_Supply_Chain_Events/links/59ef2647458515ec0c79dcf5/Concept-and-Possible-Application-of-an-Automated-Framework-to-Influence-Production-Dispatch-Based-on-Supply-Chain-Events.pdf",
      "authors": [
        {
          "name": "D Bauer",
          "url": "https://scholar.google.com/citations?user=TdAa18gAAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "F Maier",
          "url": ""
        },
        {
          "name": "T Bauernhansl",
          "url": ""
        },
        {
          "name": "B Waschneck",
          "url": ""
        },
        {
          "name": "et al.",
          "url": ""
        }
      ],
      "description": "We present in this paper an automated framework for linking supply chain events to production management. While events in the supply chain are detected using statistical process control, the control loop to production is closed using ideas inspired from run-to-run�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.researchgate.net/profile/Dennis_Bauer3/publication/320015142_Concept_and_Possible_Application_of_an_Automated_Framework_to_Influence_Production_Dispatch_Based_on_Supply_Chain_Events/links/59ef2647458515ec0c79dcf5/Concept-and-Possible-Application-of-an-Automated-Framework-to-Influence-Production-Dispatch-Based-on-Supply-Chain-Events.pdf"
    },
    {
      "title": "Flexible IT platform for synchronizing energy demands with volatile markets",
      "url": "https://www.degruyter.com/view/j/itit.2018.60.issue-3/itit-2018-0001/itit-2018-0001.xml",
      "authors": [
        {
          "name": "P Schott",
          "url": "https://scholar.google.com/citations?user=zR4wn8AAAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "R Ahrens",
          "url": ""
        },
        {
          "name": "D Bauer",
          "url": "https://scholar.google.com/citations?user=TdAa18gAAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "F Hering&#x2026;&#xFFFD;- it-Information&#xFFFD;&#x2026;",
          "url": ""
        },
        {
          "name": "2018",
          "url": ""
        }
      ],
      "description": "Abandoning fossil and nuclear energy sources in the long run and increasing amount of renewable energies in electricity production causes a more volatile power supply. Depending on external realities, renewable energy production emphasizes the need for�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Open Innovation in the Workplace: Future Work Lab as a Living Lab",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827118303068",
      "authors": [
        {
          "name": "A Issa",
          "url": ""
        },
        {
          "name": "S Schumacher",
          "url": ""
        },
        {
          "name": "B Hatiboglu",
          "url": ""
        },
        {
          "name": "E Gro&#xFFFD;&#x2026;&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2018",
          "url": ""
        }
      ],
      "description": "This paper describes a conceptual methodology based on innovation in future workplaces within the smart factory, through adopting a quintuple helix open innovation model. Within this framework, the societal and economic challenges are seen as drivers for innovation�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Optimization of global production network structures",
      "url": "https://link.springer.com/chapter/10.1007/978-3-658-08844-6_61",
      "authors": [
        {
          "name": "A Prinz",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- 15. Internationales Stuttgarter Symposium",
          "url": ""
        },
        {
          "name": "2015",
          "url": ""
        }
      ],
      "description": "In recent years, companies have experienced several waves of internationalization [19]. As a result, production networks have been developed into global and complex entities [13], which, in turn, are suboptimal and fragmented [4].“The challenge companies are facing now�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Expert systems in special machinery: Increasing the productivity of processes in commissioning",
      "url": "https://www.sciencedirect.com/science/article/pii/S221282711730344X",
      "authors": [
        {
          "name": "S Poeschl",
          "url": ""
        },
        {
          "name": "J Lieb",
          "url": ""
        },
        {
          "name": "F Wirth",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2017",
          "url": ""
        }
      ],
      "description": "Due to the megatrend globalization, special machinery is gaining significance for the capital goods sector. Characterized by the fulfillment of individual customer requirements, companies in special machinery have to deal with very specific and technologically complex�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S221282711730344X/pdf?md5=efe3b498c1a7883b5885308de7a76370&isDTMRedir=Y&pid=1-s2.0-S221282711730344X-main.pdf&_valck=1"
    },
    {
      "title": "Availability Focused Risk Analysis to Support Life Cycle Costing Prognosis",
      "url": "https://link.springer.com/chapter/10.1007/978-3-642-29069-5_84",
      "authors": [
        {
          "name": "O Mannu&#xFFFD;",
          "url": ""
        },
        {
          "name": "A Schloske",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Leveraging Technology for a&#xFFFD;&#x2026;",
          "url": ""
        },
        {
          "name": "2012",
          "url": ""
        }
      ],
      "description": "Preventive and corrective maintenance are, inter alia, the dominant influences for the Life Cycle Cost of machinery. Within the paper we will show an approach to support the prediction of corrective maintenance actions during the design phase of a machine with a�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Sensor-driven Analysis of Manual Assembly Systems",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827118304116",
      "authors": [
        {
          "name": "S K&#xFFFD;rcher",
          "url": ""
        },
        {
          "name": "E Cuk",
          "url": ""
        },
        {
          "name": "T Denner",
          "url": ""
        },
        {
          "name": "D G&#xFFFD;rzig",
          "url": ""
        },
        {
          "name": "LC G&#xFFFD;nther&#x2026;&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2018",
          "url": ""
        }
      ],
      "description": "Download full text in PDF Opens in a new window. Article suggestions will be shown in a dialog \non return to ScienceDirect�… Please enable JavaScript to use all the features on this page.  �… A reliable knowledge of processing times and following analysis are the basis for successful�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Information Flow-based Capability Matching Service for Smart Manufacturing",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827118303044",
      "authors": [
        {
          "name": "A Bildstein",
          "url": "https://scholar.google.com/citations?user=pjbUWnkAAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "J Feng",
          "url": "https://scholar.google.com/citations?user=nTMJrSQAAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2018",
          "url": ""
        }
      ],
      "description": "One of the main theories behind the worldwide 'Factories of the Future'movement is the idea that machines and systems, and thus the production system, are getting far more interconnected with each other to finally reach a certain level of self-organization and�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Big Data in automotive production–Concepts and experiences",
      "url": "https://link.springer.com/chapter/10.1007/978-3-658-13255-2_101",
      "authors": [
        {
          "name": "T Bauernhansl&#xFFFD;- 16. Internationales Stuttgarter Symposium",
          "url": ""
        },
        {
          "name": "2016",
          "url": ""
        }
      ],
      "description": "This manuskript is not available according to publishing\nrestriction. Thank you for your understanding.\n",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Editorial 49th CIRP International Conference on Manufacturing Systems (CIRP CMS)",
      "url": "https://www.infona.pl/resource/bwmeta1.element.elsevier-2ffc2e92-8145-378c-a4f9-172484337df3",
      "authors": [
        {
          "name": "E Westk&#xFFFD;mper",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2016",
          "url": ""
        }
      ],
      "description": "",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Matrix Fusion Factory",
      "url": "https://www.sciencedirect.com/science/article/pii/S2351978918304852",
      "authors": [
        {
          "name": "J Siegert",
          "url": ""
        },
        {
          "name": "T Schlegel",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia Manufacturing",
          "url": ""
        },
        {
          "name": "2018",
          "url": ""
        }
      ],
      "description": "The current trend in mass personalization is making it ever-more important to achieve a smooth transition towards a more flexible production process to keep up with global competition. IFF has therefore developed the concept of the Matrix Fusion Factory (MFF)�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Industrie 4.0 roadmap: Framework for digital transformation based on the concepts of capability maturity and alignment",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827118303081",
      "authors": [
        {
          "name": "A Issa",
          "url": ""
        },
        {
          "name": "B Hatiboglu",
          "url": ""
        },
        {
          "name": "A Bildstein",
          "url": "https://scholar.google.com/citations?user=pjbUWnkAAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2018",
          "url": ""
        }
      ],
      "description": "Adopting digital transformation and Industrie 4.0 concepts is increasingly important for manufacturing companies acting in dynamic and competitive markets. In practice, however, these organizations struggle with implementing those concepts because Industrie 4.0 is�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "The biological transformation of the manufacturing industry–envisioning biointelligent value adding",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827118306012",
      "authors": [
        {
          "name": "R Miehe",
          "url": ""
        },
        {
          "name": "T Bauernhansl",
          "url": ""
        },
        {
          "name": "O Schwarz",
          "url": ""
        },
        {
          "name": "A Traube&#x2026;&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2018",
          "url": ""
        }
      ],
      "description": "Since the first industrial revolution manufacturing systems have been considered well-defined socio-technological entities that extract resources from the natural environment in order to create goods for the satisfaction of human needs. Productivity gains stimulated by�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Rule-based integration of smart services using the manufacturing service bus",
      "url": "https://ieeexplore.ieee.org/abstract/document/8397529/",
      "authors": [
        {
          "name": "M Wieland",
          "url": "https://scholar.google.com/citations?user=NpUAQhcAAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "F Steimle",
          "url": ""
        },
        {
          "name": "B Mitschang",
          "url": "https://scholar.google.com/citations?user=zRbR5b8AAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "2017",
          "url": ""
        }
      ],
      "description": "Factories have to adapt permanently to changing situations in order to stay competitive. Premise to achieve this objective is up-to-date information on all levels of a factory and during the product life cycle, so that men and machine can optimize their activities according�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Process planning in special machinery: Increasing reliability in volatile surroundings",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827117303451",
      "authors": [
        {
          "name": "S Poeschl",
          "url": ""
        },
        {
          "name": "D Roeck",
          "url": ""
        },
        {
          "name": "F Wirth",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2017",
          "url": ""
        }
      ],
      "description": "In Germany the growing demand for customized systems and integrated solutions in machinery enhance the importance of special machinery. Within this industry, the commissioning process represents a significant part in the product engineering process and�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S2212827117303451/pdf?md5=328edb79e4908266d8b179738e286c53&isDTMRedir=Y&pid=1-s2.0-S2212827117303451-main.pdf&_valck=1"
    },
    {
      "title": "IT Platform for Energy Demand Synchronization Among Manufacturing Companies",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827118304062",
      "authors": [
        {
          "name": "D Schel",
          "url": ""
        },
        {
          "name": "D Bauer",
          "url": "https://scholar.google.com/citations?user=TdAa18gAAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "FG Vazquez",
          "url": ""
        },
        {
          "name": "F Schulz&#x2026;&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2018",
          "url": ""
        }
      ],
      "description": "Demand Response as a propagated solution to address the challenges of an increasingly volatile energy supply due to renewable energies requires sufficient IT solutions to synchronize manufacturing companies with energy markets. To support especially small and�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Deep reinforcement learning for semiconductor production scheduling",
      "url": "https://ieeexplore.ieee.org/abstract/document/8373191/",
      "authors": [
        {
          "name": "B Waschneck",
          "url": ""
        },
        {
          "name": "A Reichstaller",
          "url": "https://scholar.google.com/citations?user=m5Gy9jAAAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "L Belzner",
          "url": "https://scholar.google.com/citations?user=aRV5cr0AAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "2018 29th&#xFFFD;&#x2026;",
          "url": ""
        },
        {
          "name": "2018",
          "url": ""
        }
      ],
      "description": "Despite producing tremendous success stories by identifying cat videos [1] or solving computer as well as board games [2],[3], the adoption of deep learning in the semiconductor industry is moderatre. In this paper, we apply Google DeepMind's Deep Q Network (DQN)�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Optimized Robot Systems for Future Aseptic Personalized Mass Production",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827118301690",
      "authors": [
        {
          "name": "M Keller",
          "url": ""
        },
        {
          "name": "G Baum",
          "url": ""
        },
        {
          "name": "M Schweizer",
          "url": ""
        },
        {
          "name": "F B&#xFFFD;rger",
          "url": ""
        },
        {
          "name": "U Gommel&#x2026;&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2018",
          "url": ""
        }
      ],
      "description": "For future pharmaceutical personalized mass production, highly flexible aseptic automation solutions are needed such as 6-axis robot systems well known from car manufacturing lines. Up to date, most robots are not suitable for aseptic production due to the lack of hygienic�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "The Digital Shadow of production–A concept for the effective and efficient information supply in dynamic industrial environments",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827118303470",
      "authors": [
        {
          "name": "T Bauernhansl",
          "url": ""
        },
        {
          "name": "S Hartleif",
          "url": ""
        },
        {
          "name": "T Felix&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2018",
          "url": ""
        }
      ],
      "description": "Today there are many technical (eg vendor lock-in effect) and organizational (eg information quality) issues in information delivery. The Digital Shadow ensures a viable information flow, also in the sense of information logistics, between all actors in and outside a factory. The�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Resource-efficient manufacturing systems through lightweight construction by using a combined development approach",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827118302804",
      "authors": [
        {
          "name": "U Schleinkofer",
          "url": ""
        },
        {
          "name": "F Laufer",
          "url": ""
        },
        {
          "name": "M Zimmermann",
          "url": ""
        },
        {
          "name": "D Roth&#x2026;&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2018",
          "url": ""
        }
      ],
      "description": "Smart manufacturing systems of the future have to be adaptive, self-autonomous but also resource-efficient in their own manufacturing process as well during their utilization phase. To reach this target within a cost-efficient development and production process, holistic and�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Similarity-Based Product Search for Next Generation Process Planning",
      "url": "https://www.sciencedirect.com/science/article/pii/S2212827115006551",
      "authors": [
        {
          "name": "J Lenz",
          "url": "https://scholar.google.com/citations?user=lI_KdfIAAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "T Denner",
          "url": ""
        },
        {
          "name": "M Lickefett",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2015",
          "url": ""
        }
      ],
      "description": "The main challenges for companies in today's environment are an increased demand for customized products, shorter product life cycles and the resulting higher amount of variants. This leads to significant growth in existing production data. Additionally, improved ICT�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.sciencedirect.com/science/article/pii/S2212827115006551/pdf?md5=63a46fd7e96f28f580ba1ace63bf57a7&isDTMRedir=Y&pid=1-s2.0-S2212827115006551-main.pdf&_valck=1"
    },
    {
      "title": "Different competence areas of workers in combination with technical assistance as an enabler for mass personalization products",
      "url": "https://www.sciencedirect.com/science/article/pii/S2351978918304888",
      "authors": [
        {
          "name": "E Gro&#xFFFD;",
          "url": ""
        },
        {
          "name": "J Siegert",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Procedia Manufacturing",
          "url": ""
        },
        {
          "name": "2018",
          "url": ""
        }
      ],
      "description": "From simple products, often mechanical and electronic products, products are becoming more and more complicated and complex due to individualization and personalization and an increasing degree of cross-linking. In the future, customer-specific products will be�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Optimization of global production scheduling with deep reinforcement learning",
      "url": "https://www.sciencedirect.com/science/article/pii/S221282711830372X",
      "authors": [
        {
          "name": "B Waschneck",
          "url": ""
        },
        {
          "name": "A Reichstaller",
          "url": "https://scholar.google.com/citations?user=m5Gy9jAAAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "L Belzner",
          "url": "https://scholar.google.com/citations?user=aRV5cr0AAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "T Altenm&#xFFFD;ller&#x2026;&#xFFFD;- Procedia CIRP",
          "url": ""
        },
        {
          "name": "2018",
          "url": ""
        }
      ],
      "description": "Abstract Industrie 4.0 introduces decentralized, self-organizing and self-learning systems for production control. At the same time, new machine learning algorithms are getting increasingly powerful and solve real world problems. We apply Google DeepMind's Deep Q�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Industrie 4.0–die Industrielle Revolution geht weiter",
      "authors": [
        {
          "name": "",
          "url": ""
        }
      ],
      "description": "",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "„Virtual Fort Knox “",
      "authors": [
        {
          "name": "",
          "url": ""
        }
      ],
      "description": "",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Fabrikoptimierung mit Kamera und Beamer: Das\" Shop Floor Analyzing Visualization Center\" integriert digitale und reale Welt",
      "authors": [
        {
          "name": "",
          "url": ""
        }
      ],
      "description": "",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Einfluss von Industrie 4.0 auf unsere Fabriken und die Fabrikplanung",
      "authors": [
        {
          "name": "",
          "url": ""
        }
      ],
      "description": "",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Die Smart Factory der Zukunft–Wie die vierte industrielle Revolution die Prozesse in der Produktion ver�ndert",
      "authors": [
        {
          "name": "",
          "url": ""
        }
      ],
      "description": "",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Umsetzungsschritte in der vierten industriellen Revolution, 1",
      "authors": [
        {
          "name": "",
          "url": ""
        }
      ],
      "description": "",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Die Smart Factory der Zukunft–Wie die vierte industrielle Revolution die Prozesse in der Produktion ver�ndert, RKW Magazin, 4/2013",
      "authors": [
        {
          "name": "",
          "url": ""
        }
      ],
      "description": "",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Energieeffizienz als Wettbewerbsfaktor: Investitionen in die Zukunft",
      "authors": [
        {
          "name": "",
          "url": ""
        }
      ],
      "description": "",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Schritte zu Big Data in der Produktion",
      "url": "http://www.hanser-elibrary.com/doi/abs/10.3139/104.111635",
      "authors": [
        {
          "name": "E Colangelo",
          "url": ""
        },
        {
          "name": "A Pira",
          "url": ""
        },
        {
          "name": "A Noack&#x2026;&#xFFFD;- ZWF Zeitschrift f&#xFFFD;r&#xFFFD;&#x2026;",
          "url": ""
        },
        {
          "name": "2016",
          "url": ""
        }
      ],
      "description": "Hersteller bef�rchten, sich einmalige Chancen entgehen zu lassen wenn sie den Big-Data-Zug verpassen. Allerdings sind der Einstieg und der Nutzen solcher Ans�tze unklar. Aufgrund dieser Hindernisse wird die Umsetzung von Data Analytics im industriellen�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Neupositionierung einer nationalen Technologieplattform",
      "url": "http://www.hanser-elibrary.com/doi/abs/10.3139/104.111667",
      "authors": [
        {
          "name": "T Bauernhansl",
          "url": ""
        },
        {
          "name": "G H&#xFFFD;rcher",
          "url": ""
        },
        {
          "name": "M R&#xFFFD;hm&#x2026;&#xFFFD;- ZWF Zeitschrift f&#xFFFD;r&#xFFFD;&#x2026;",
          "url": ""
        },
        {
          "name": "2017",
          "url": ""
        }
      ],
      "description": "Kurzfassung Die nationale Technologieplattform MANUFUTURE�-DE wurde im Jahr 2006 gegr�ndet und vertritt seitdem die Interessen deutscher produzierender Unternehmen bei der Ausgestaltung von nationalen und europ�ischen Forschungsprogrammen. Unter�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Produktionssteuerung",
      "url": "https://link.springer.com/chapter/10.1007/978-3-642-41891-4_2",
      "authors": [
        {
          "name": "E Westk&#xFFFD;mper",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Enterprise-Integration",
          "url": ""
        },
        {
          "name": "2014",
          "url": ""
        }
      ],
      "description": "Die Produktionsplanung und-steuerung oder neuer, das Auftragsmanagement, ist ein fester Bestandteil des Managements der Organisation industrieller Unternehmen. Ihr Ziel ist die termin-, mengen-und qualit�tsgerechte Lieferung von Produkten an die jeweiligen Kunden�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Industrie 4.0: Wie werden sich Gesch�ftsprozesse ver�ndern",
      "authors": [
        {
          "name": "",
          "url": ""
        }
      ],
      "description": "",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Gesch�ftsmodell-Innovationen",
      "url": "https://link.springer.com/chapter/10.1007/978-3-662-45279-0_95",
      "authors": [
        {
          "name": "A Schatz",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Handbuch Industrie 4.0 Bd. 1",
          "url": ""
        },
        {
          "name": "2017",
          "url": ""
        }
      ],
      "description": "Unternehmen mit innovativen Gesch�ftsmodellen sind mittelfristig im Schnitt sechs Prozent profitabler, als diejenigen, die sich auf Produkt-und Prozessinnovationen beschr�nken. Eine st�rkere Gesch�ftsmodellorientierung bietet im Rahmen von Industrie 4.0 f�r Unternehmen�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Energieeffizienz muss auf die politische Agenda: Energiewende erfordert Effizienzma�nahmen",
      "url": "http://ejournals.duncker-humblot.de/doi/abs/10.3790/vjh.82.3.183",
      "authors": [
        {
          "name": "H D&#xFFFD;rr",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Vierteljahrshefte zur&#xFFFD;&#x2026;",
          "url": ""
        },
        {
          "name": "2013",
          "url": ""
        }
      ],
      "description": "Zusammenfassung Das Thema Energieeffizienz findet in Politik, Wirtschaft und Wissenschaft bisher nur unzureichend Beachtung. Obwohl die Bundesregierung in ihrem Energiekonzept eine Entkopplung von Wachstum und Energieverbrauch vorsieht und�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.econstor.eu/bitstream/10419/106466/1/vjh.82.3.183.pdf"
    },
    {
      "title": "Synergie",
      "url": "https://link.springer.com/chapter/10.1007/978-3-322-81082-3_4",
      "authors": [
        {
          "name": "T Bauernhansl&#xFFFD;- Bewertung von Synergiepotenzialen im Maschinenbau",
          "url": ""
        },
        {
          "name": "2003",
          "url": ""
        }
      ],
      "description": "Zusammenfassung Im Folgenden wird der Themenkomplex der Synergie behandelt. Es werden grundlegende Definitionen vorgestellt und konzeptionelle Fragen gekl�rt. Darauf aufbauend werden die Phasen des Synergiemanagements erl�utert. Im Anschluss werden�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Beschichtungen f�r extreme Einsatzbedingungen",
      "url": "https://www.researchgate.net/profile/Claudia_Dos_Santos3/publication/306100783_Beschichtungen_fur_extreme_Einsatzbedingungen_Teil_1_-_Tribokorrosionsuntersuchungen_an_Nickel-Legierungsschichten/links/57b1888408aeb2cf17c4fa19/Beschichtungen-fuer-extreme-Einsatzbedingungen-Teil-1-Tribokorrosionsuntersuchungen-an-Nickel-Legierungsschichten.pdf",
      "authors": [
        {
          "name": "CS Von Stefan K&#xFFFD;lle",
          "url": ""
        },
        {
          "name": "K Feige",
          "url": ""
        },
        {
          "name": "P Schwanzer",
          "url": ""
        },
        {
          "name": "et al.",
          "url": ""
        }
      ],
      "description": "Durch den Verzicht auf Abdichtung bei Maschinenelementen wie Lagerungen kann in der Offshoreindustrie sehr viel Energie gespart werden. Allerdings sind die Maschinenelemente damit dem korrosiven Umgebungsmedium ausgesetzt–es entsteht ein neues, tribo�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": "",
      "pdf": "https://www.researchgate.net/profile/Claudia_Dos_Santos3/publication/306100783_Beschichtungen_fur_extreme_Einsatzbedingungen_Teil_1_-_Tribokorrosionsuntersuchungen_an_Nickel-Legierungsschichten/links/57b1888408aeb2cf17c4fa19/Beschichtungen-fuer-extreme-Einsatzbedingungen-Teil-1-Tribokorrosionsuntersuchungen-an-Nickel-Legierungsschichten.pdf"
    },
    {
      "title": "Fallbeispiele",
      "url": "https://link.springer.com/content/pdf/10.1007/978-3-642-55768-2_5.pdf",
      "authors": [
        {
          "name": "UH B&#xFFFD;hlke",
          "url": ""
        },
        {
          "name": "M Grawatsch",
          "url": ""
        },
        {
          "name": "WJ Huppmann&#x2026;&#xFFFD;- &#x2026;&#xFFFD;f&#xFFFD;r technische Produkte",
          "url": ""
        },
        {
          "name": "2003",
          "url": ""
        }
      ],
      "description": "In diesem Kapitel wird das praktische Innovationsma- nagement an sechs Fallbeispielen \nveranschaulicht. Fallbeispiel 1: SCHOTT Glas analysiert regelm��ig die eigene \nUnternehmenssituation. Im Fallbeispiel wird beschrieben, wie SCHOTT daraus die Konsequenz�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Fallbeispiel",
      "url": "https://link.springer.com/chapter/10.1007/978-3-322-81082-3_9",
      "authors": [
        {
          "name": "T Bauernhansl&#xFFFD;- Bewertung von Synergiepotenzialen im Maschinenbau",
          "url": ""
        },
        {
          "name": "2003",
          "url": ""
        }
      ],
      "description": "Die praktische Anwendbarkeit der in den vorangegangenen Kapiteln entwickelten Methodik wird im Folgenden anhand zweier Fallbeispiele gepr�ft und belegt. Im ersten Fall wird die Methode “outside-in” auf den Zusammenschluss der Firmen Charmilles Technologies und�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Zusammenfassung",
      "url": "https://link.springer.com/chapter/10.1007/978-3-322-81082-3_10",
      "authors": [
        {
          "name": "T Bauernhansl&#xFFFD;- Bewertung von Synergiepotenzialen im Maschinenbau",
          "url": ""
        },
        {
          "name": "2003",
          "url": ""
        }
      ],
      "description": "Unternehmensverbindungen scheitern h�ufig, weil es den beteiligten Partnern nicht gelingt, Synergieeffekte zu erschlie�en. H�ufig werden als Gr�nde die Fehleinsch�tzung von Synergiepotentialen, die Vernachl�ssigung kultureller Aspekte sowie eine unzureichende�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Unternehmensverbindungen",
      "url": "https://link.springer.com/chapter/10.1007/978-3-322-81082-3_3",
      "authors": [
        {
          "name": "T Bauernhansl&#xFFFD;- Bewertung von Synergiepotenzialen im Maschinenbau",
          "url": ""
        },
        {
          "name": "2003",
          "url": ""
        }
      ],
      "description": "Zusammenfassung Im Folgenden werden die Grundlagen von Unternehmensverbindungen anhand von Definitionen, Abgrenzungen und Typologien erl�utert. In einem ersten Schritt sind Zusammenschl�sse und Kooperationen voneinander abzugrenzen. Anschlie�end�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Methodik",
      "url": "https://link.springer.com/chapter/10.1007/978-3-642-55173-4_1",
      "authors": [
        {
          "name": "T Bauernhansl",
          "url": ""
        },
        {
          "name": "J Mandel",
          "url": ""
        },
        {
          "name": "S Wahren&#x2026;&#xFFFD;- &#x2026;&#xFFFD;in Deutschland-eine&#xFFFD;&#x2026;",
          "url": ""
        },
        {
          "name": "2014",
          "url": ""
        }
      ],
      "description": "Die vorliegende Studie wurde vom Institut f�r Energieeffizienz in der Produktion (EEP) der Universit�t Stuttgart als Metastudie verfasst. In diesem Zusammenhang wurden 268 Ver�ffentlichungen von Ministerien, Forschungseinrichtungen, Fach-und�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Die Virtuelle Universit�t",
      "url": "https://link.springer.com/chapter/10.1007/978-3-642-60242-9_49",
      "authors": [
        {
          "name": "W Eversheim",
          "url": ""
        },
        {
          "name": "T Bauernhansl",
          "url": ""
        },
        {
          "name": "O Terhaag&#xFFFD;- Horizonte",
          "url": ""
        },
        {
          "name": "1999",
          "url": ""
        }
      ],
      "description": "Nicht zuletzt aufgrund der rasanten Entwicklung der Informations-und Kommunikationstechnologien r�ckt die Welt immer n�her zusammen. Die Anforderungen an die Ausbildung der Mitglieder einer globalen Gesellschaft ver�ndern sich damit stetig�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "FOREWORD バリューチェーンイノベーション: スマートマニュファクチャリング (Value Chain Innovation デジタル技術が価値をつなぐスマートインダストリー)",
      "url": "https://ci.nii.ac.jp/naid/40021421085/",
      "authors": [
        {
          "name": "T Bauernhansl&#xFFFD;- &#x65E5;&#x7ACB;&#x8A55;&#x8AD6;",
          "url": ""
        },
        {
          "name": "2017",
          "url": ""
        }
      ],
      "description": "CiNii 国立情報学研究所 学術情報ナビゲータ[サイニィ]. メニュー 検索�… \n",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Industrie",
      "url": "https://link.springer.com/chapter/10.1007/978-3-642-55173-4_4",
      "authors": [
        {
          "name": "T Bauernhansl",
          "url": ""
        },
        {
          "name": "J Mandel",
          "url": ""
        },
        {
          "name": "S Wahren&#x2026;&#xFFFD;- &#x2026;&#xFFFD;in Deutschland-eine&#xFFFD;&#x2026;",
          "url": ""
        },
        {
          "name": "2014",
          "url": ""
        }
      ],
      "description": "Zusammenfassung Die Industrie ist mit 22.000 Unternehmen und circa 5 Mio. Mitarbeitern ein bedeutender Kernbereich der deutschen Volks-und Exportwirtschaft und hatte 2011 mit 22% einen erheblichen Anteil an der Bruttowertsch�pfung Deutschlands [BMWi 2013 b]. Die�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Verkehr",
      "url": "https://link.springer.com/content/pdf/10.1007/978-3-642-55173-4_6.pdf",
      "authors": [
        {
          "name": "T Bauernhansl",
          "url": ""
        },
        {
          "name": "J Mandel",
          "url": ""
        },
        {
          "name": "S Wahren&#x2026;&#xFFFD;- &#x2026;&#xFFFD;in Deutschland-eine&#xFFFD;&#x2026;",
          "url": ""
        },
        {
          "name": "2014",
          "url": ""
        }
      ],
      "description": "Im Jahr 2011 verbrauchte der Verkehrssektor rund 30 % der gesamtdeutschen Endenergie \n[AGEB 2012 a]. Dies entspricht mit �ber 150 Mt CO2 pro Jahr etwa 20 % des gesamten \nCO2- Aussto�es der Bundesrepublik. [BMWI 2010 c][AGEB 2012 a] [UBA 2013 c] �ber die H�lfte�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Makro�konomische Betrachtung",
      "url": "https://link.springer.com/chapter/10.1007/978-3-642-55173-4_3",
      "authors": [
        {
          "name": "T Bauernhansl",
          "url": ""
        },
        {
          "name": "J Mandel",
          "url": ""
        },
        {
          "name": "S Wahren&#x2026;&#xFFFD;- &#x2026;&#xFFFD;in Deutschland-eine&#xFFFD;&#x2026;",
          "url": ""
        },
        {
          "name": "2014",
          "url": ""
        }
      ],
      "description": "Zusammenfassung Die Entwicklung der Energieeffizienz einer Volkswirtschaft oder einzelner Sektoren wird in erster Linie anhand von zwei Indikatoren bewertet, der Energieintensit�t und-produktivit�t [UBA 2012 b]. Die Energieproduktivit�t (EP) beschreibt�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Reflexion bestehender Ans�tze zur Synergiebewertung",
      "url": "https://link.springer.com/chapter/10.1007/978-3-322-81082-3_5",
      "authors": [
        {
          "name": "T Bauernhansl&#xFFFD;- Bewertung von Synergiepotenzialen im Maschinenbau",
          "url": ""
        },
        {
          "name": "2003",
          "url": ""
        }
      ],
      "description": "Nachdem in den vorangegangenen Kapiteln die Grundlagen der Arbeit ausgef�hrt wurden, werden im Folgenden zur Vorbereitung der Entwicklung einer Methodik zur Bewertung von Synergiepotentialen im Maschinenbau bestehende Bewertungsans�tze analysiert�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Trends und Prognosen",
      "url": "https://link.springer.com/chapter/10.1007/978-3-642-55173-4_7",
      "authors": [
        {
          "name": "T Bauernhansl",
          "url": ""
        },
        {
          "name": "J Mandel",
          "url": ""
        },
        {
          "name": "S Wahren&#x2026;&#xFFFD;- &#x2026;&#xFFFD;in Deutschland-eine&#xFFFD;&#x2026;",
          "url": ""
        },
        {
          "name": "2014",
          "url": ""
        }
      ],
      "description": "Zusammenfassung Das Potenzial zur Rationalisierung des anwenderseitigen Energieverbrauchs in Deutschland wird anhand verschiedener Szenarien in der Literatur abgebildet. Im Folgenden werden aus den Energiezielen der Bundesregierung Richtwerte�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Instanziierung der Synergiearten",
      "url": "https://link.springer.com/content/pdf/10.1007/978-3-322-81082-3_7.pdf",
      "authors": [
        {
          "name": "T Bauernhansl&#xFFFD;- Bewertung von Synergiepotenzialen im Maschinenbau",
          "url": ""
        },
        {
          "name": "2003",
          "url": ""
        }
      ],
      "description": "1m Bereich der Rationalisierung werden Synergien ermittelt, die einen direkten Einfluss auf \ndie Kostensituation der beteiligten Partner ha- ben. 1m Fokus stehen hier die Synergiemechanismen \nGroBendegression und Reichweiteneffekt sowie Redundanzmechanismen. In Abgrenzung zum�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Die Branche Maschinenbau",
      "url": "https://link.springer.com/chapter/10.1007/978-3-322-81082-3_2",
      "authors": [
        {
          "name": "T Bauernhansl&#xFFFD;- Bewertung von Synergiepotenzialen im Maschinenbau",
          "url": ""
        },
        {
          "name": "2003",
          "url": ""
        }
      ],
      "description": "Der Maschinenbau ist neben der Automobil-, Elektrotechnik-und Nahrungsmittelindustrie eine der zentralen Wirtschaftsbranchen des produzierenden Gewerbes in Deutschland. Die Unternehmen der Branche stellen die grundlegenden Betriebsmittel f�r s�mtliche Industrie�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Analyse von Synergiepotentialen",
      "url": "https://link.springer.com/chapter/10.1007/978-3-322-81082-3_8",
      "authors": [
        {
          "name": "T Bauernhansl&#xFFFD;- Bewertung von Synergiepotenzialen im Maschinenbau",
          "url": ""
        },
        {
          "name": "2003",
          "url": ""
        }
      ],
      "description": "Im folgenden Kapitel werden zun�chst die synergieart�bergreifenden Bausteine der Methodik instanziiert. Hierzu werden der Einfluss des Fit und der Unternehmensverbindungsart untersucht. Ferner wird eine M�glichkeit geschaffen�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Zusammenfassende Bewertung",
      "url": "https://link.springer.com/10.1007/978-3-642-55173-4_8",
      "authors": [
        {
          "name": "T Bauernhansl",
          "url": ""
        },
        {
          "name": "J Mandel",
          "url": ""
        },
        {
          "name": "S Wahren&#x2026;&#xFFFD;- &#x2026;&#xFFFD;in Deutschland-eine&#xFFFD;&#x2026;",
          "url": ""
        },
        {
          "name": "2014",
          "url": ""
        }
      ],
      "description": "Zusammenfassung Die Verwirklichung der Ziele der Bundesregierung bis 2050 erfordert eine Rationalisierung des Endenergieverbrauchs um rund 38% gegen�ber 2008 [Schlesinger et al. 2010]. Demnach muss der Endenergieverbrauch von knapp 9130 PJ im�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Future Work Lab",
      "url": "https://link.springer.com/chapter/10.1007/978-3-662-55890-4_11",
      "authors": [
        {
          "name": "W Bauer",
          "url": ""
        },
        {
          "name": "M H&#xFFFD;mmerle",
          "url": ""
        },
        {
          "name": "T Bauernhansl",
          "url": ""
        },
        {
          "name": "T Zimmermann&#xFFFD;- Digitalisierung",
          "url": ""
        },
        {
          "name": "2018",
          "url": ""
        }
      ],
      "description": "Zusammenfassung Das Future Work Lab macht als Innovationslabor f�r Arbeit, Mensch und Technik die Gestaltung zukunftsorientierter Arbeitskonzepte f�r Unternehmen, Verb�nde sowie Mitarbeitende und Gewerkschaften durchg�ngig erfahrbar. Das Labor verbindet die�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Gesch�ftsmodell-Innovation en: Profitabler wirtschaften mit hohem Vernetzungsgrad",
      "url": "https://link.springer.com/content/pdf/10.1007/978-3-662-45537-1_95-1.pdf",
      "authors": [
        {
          "name": "A Schatz",
          "url": ""
        },
        {
          "name": "T Bauernhansl&#xFFFD;- Handbuch Industrie 4.0: Produktion&#xFFFD;&#x2026;",
          "url": ""
        },
        {
          "name": "2016",
          "url": ""
        }
      ],
      "description": "Unternehmen mit innovativen Gesch�ftsmodellen sind mittelfristig im Schnitt sechs Prozent profitabler, als diejenigen, die sich auf Produkt-und Prozessinnovationen beschr�nken. Eine st�rkere Gesch�ftsmodellorientierung bietet im Rahmen von Industrie 4.0 f�r Unternehmen�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Generisches Synergiemodell",
      "url": "https://link.springer.com/chapter/10.1007/978-3-322-81082-3_6",
      "authors": [
        {
          "name": "T Bauernhansl&#xFFFD;- Bewertung von Synergiepotenzialen im Maschinenbau",
          "url": ""
        },
        {
          "name": "2003",
          "url": ""
        }
      ],
      "description": "Ausgehend von den in Kapitel 5.1 beschriebenen Anforderungen wird in Auseinandersetzung mit vorhandenen Ans�tzen im Folgenden eine Methodik zur Bewertung von Synergiepotentialen im Maschinenbau entwickelt. In einem ersten Schritt�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Geb�ude",
      "url": "https://link.springer.com/chapter/10.1007/978-3-642-55173-4_5",
      "authors": [
        {
          "name": "T Bauernhansl",
          "url": ""
        },
        {
          "name": "J Mandel",
          "url": ""
        },
        {
          "name": "S Wahren&#x2026;&#xFFFD;- &#x2026;&#xFFFD;in Deutschland-eine&#xFFFD;&#x2026;",
          "url": ""
        },
        {
          "name": "2014",
          "url": ""
        }
      ],
      "description": "Zusammenfassung Nachdem im vorangegangenen Kapitel Energieeffizienzpotenziale im Sektor Industrie skizziert wurden, analysiert dieses Kapitel die M�glichkeiten zur rationellen Energieanwendung in den Sektoren Haushalte sowie Gewerbe, Handel und�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    },
    {
      "title": "Kognitive Systeme und Robotik",
      "url": "https://link.springer.com/chapter/10.1007/978-3-662-55890-4_14",
      "authors": [
        {
          "name": "C Bauckhage",
          "url": ""
        },
        {
          "name": "T Bauernhansl",
          "url": ""
        },
        {
          "name": "J Beyerer",
          "url": "https://scholar.google.com/citations?user=-BCKzg0AAAAJ&hl=en&oe=ASCII&oi=sra"
        },
        {
          "name": "J Garcke&#xFFFD;- Digitalisierung",
          "url": ""
        },
        {
          "name": "2018",
          "url": ""
        }
      ],
      "description": "Kognitive Systeme k�nnen komplexe Prozesse �berwachen, analysieren und gewinnen daraus auch die F�higkeit, in ungeplanten oder unbekannten Situationen richtig zu entscheiden. Fraunhofer-Experten setzen Verfahren des maschinellen Lernens ein, um�…",
      "citedCount": 0,
      "citedUrl": "https://scholar.google.comjavascript:void(0)",
      "relatedUrl": ""
    }
  ],
  "count": 145,
  "nextUrl": null,
  "prevUrl": null,
  "next": null,
  "prev": null
};

app.get('/update', (req, res) => {
   scholar.all('author:"thomas bauernhansl"')
    .then(resultsObj => {
       cache = resultsObj;
       res.send('library updated')
   });
});

app.get('/', (req, res) => {
    let paper = getPaper();
    while (paper.url === undefined || paper.url === '') {
        paper = getPaper();
    }

    //res.send(`<a href=${paper.url}>${paper.title}</a>`);
    res.redirect(paper.url);
});

app.listen(3000, () => console.log('tbh-generator listening on port 3000!'))

function getPaper(){
    return cache.results[Math.floor((Math.random() * cache.results.length-1) + 1)]
}