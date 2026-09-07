---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I graduated from **Central South University** with a degree in Computer Science and Technology. I am currently a first-year **joint Ph.D. student** at **Harbin Institute of Technology** and [**Shanghai AI Laboratory**](https://www.shlab.org.cn/), supervised by [**Wangmeng Zuo**](https://homepage.hit.edu.cn/wangmengzuo) and [**Dongzhan Zhou**](https://scholar.google.com/citations?user=Ox6SxpoAAAAJ). My primary research interests lie in **AI for Science (AI4SCI)** and **Embodied AI**.

If you are interested in connecting or discussing potential collaborations, feel free to email me.

<!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. Suspendisse condimentum, libero vel tempus mattis, risus risus vulputate libero, elementum fermentum mi neque vel nisl. Maecenas facilisis maximus dignissim. Curabitur mattis vulputate dui, tincidunt varius libero luctus eu. Mauris mauris nulla, scelerisque eget massa id, tincidunt congue felis. Sed convallis tempor ipsum rhoncus viverra. Pellentesque nulla orci, accumsan volutpat fringilla vitae, maximus sit amet tortor. Aliquam ultricies odio ut volutpat scelerisque. Donec nisl nisl, porttitor vitae pharetra quis, fringilla sed mi. Fusce pretium dolor ut aliquam consequat. Cras volutpat, tellus accumsan mattis molestie, nisl lacus tempus massa, nec malesuada tortor leo vel quam. Aliquam vel ex consectetur, vehicula leo nec, efficitur eros. Donec convallis non urna quis feugiat.

My research interest includes neural machine translation and computer vision. I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->

# 🔥 News

- *2026.08*: &nbsp;🎉🎉 The **N₀ series technical reports** (**N₀-Foundation**, **N₀-VTLA**, **N₀-TWAM**) are released!
- *2026.05*: &nbsp;🎉🎉 Our paper **"LabBuilder"** is accepted by **ICML 2026**!
- *2025.09*: &nbsp;🎉🎉 Our paper **"LabUtopia"** is accepted by **NeurIPS 2025**!
- *2025.07*: &nbsp;🎉🎉 Our paper **"CFSSeg"** is accepted by **ACM MM 2025**!
- *2024.10*: &nbsp;🎉🎉 My **first paper** is accepted by **BIBM 2024**.
- *2024.09*: &nbsp;🎉🎉 Excited to join the **Shanghai AI Laboratory** as a Ph.D. student in **AI4Science**.

# 📝 Publications 

†: Corresponding Author , \*: Equal Contribution


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Tech Report</div><video class="paper-media" data-src='images/n0-foundation.mp4' poster='images/n0-foundation.webp' muted loop playsinline preload="none" aria-label="n0-foundation cover"></video></div></div>
<div class='paper-box-text' markdown="1">

**N₀-Foundation: Towards the Age of Tactile Intelligence**

**<u>Rui Li</u>** (Core Contributor), NeoteAI Team, Fudan TEAI Team

**Technical Report, 2026**

A tactile-centric foundation for embodied manipulation that unifies scalable tactile hardware, 30,000+ hours of multimodal data across six embodiments, transferable tactile representations, and standardized real-world and simulated benchmarks.

[Paper](https://research.neoteai.com/assets/n0-foundation-report.pdf) \| [Homepage](https://research.neoteai.com/n0-foundation/) \| [Code](https://github.com/neoteai/N0-Foundation) \| [Dataset](https://huggingface.co/datasets/NeoteAIEmbodied/OpenNeoData)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Tech Report</div><video class="paper-media" data-src='images/n0-vtla.mp4' poster='images/n0-vtla.webp' muted loop playsinline preload="none" aria-label="n0-vtla cover"></video></div></div>
<div class='paper-box-text' markdown="1">

**N₀-VTLA: Scaling Vision-Tactile-Language-Action Model with Latent Tactile Tokens**

**<u>Rui Li</u>** (Data Processing), NeoteAI Team, Fudan TEAI Team

**Technical Report, 2026**

A vision-tactile-language-action foundation model for contact-rich manipulation that predicts future tactile tokens and improves offline from demonstrations, failures, human corrections, and recoveries.

[Paper](https://research.neoteai.com/assets/n0-vtla-report.pdf) \| [ArXiv](https://arxiv.org/abs/2607.23782) \| [Homepage](https://research.neoteai.com/n0-vtla/) \| [Code](https://github.com/neoteai/N0-VTLA) \| [Checkpoints](https://github.com/neoteai/N0-VTLA)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Tech Report</div><video class="paper-media" data-src='images/n0-twam.mp4' poster='images/n0-twam.png' muted loop playsinline preload="none" aria-label="n0-twam cover"></video></div></div>
<div class='paper-box-text' markdown="1">

**N₀-TWAM: Scaling Tactile-Native World Action Model for Contact-Rich Manipulation**

**<u>Rui Li</u>** (Pretraining), NeoteAI Team, Fudan TEAI Team

**Technical Report, 2026**

A tactile-native world-action model that jointly predicts future vision, touch, and action, combining anticipatory and observed tactile pathways for contact-rich manipulation.

[Paper](https://research.neoteai.com/assets/n0-twam-report.pdf) \| [ArXiv](https://arxiv.org/abs/2607.23783) \| [Homepage](https://research.neoteai.com/n0-twam/) \| [Code](https://github.com/neoteai/N0-TWAM) \| [Checkpoints](https://github.com/neoteai/N0-TWAM)

</div>
</div>

<div class='paper-box'>
{% include paper-media.html name="LabBuilder" badge="ICML 2026" alt="LabBuilder protocol-grounded laboratory layout generation overview" poster="images/publications/labbuilder.webp" small="images/publications/labbuilder-400.webp" original="images/labbuilder.png" width="753" height="388" %}
<div class='paper-box-text' markdown="1">

**LabBuilder: Protocol-Grounded 3D Layout Generation for Interactable and Safe Laboratory**

Jianbao Cao, Zhangrui Zhao, Bohan Feng, Zixuan Hu, **<u>Rui Li</u>**, Haiyuan Wan, Chenxi Li, Jingyuan Li, Wenzhe Cai, Lei Bai, Wanli Ouyang, Lingyu Duan, Di Huang, Mingting Pan, Sha Zhang, Xinzhu Ma, Shixiang Tang†, Dongzhan Zhou†

**International Conference on Machine Learning (ICML), 2026**

[ArXiv](https://arxiv.org/abs/2605.02288) \| [Website](https://che-0212.github.io/LabBuilder-site/)

</div>
</div>

<div class='paper-box'>
{% include paper-media.html name="CoEnv" badge="Preprint" alt="CoEnv embodied multi-agent collaboration demonstration" poster="images/publications/coenv.webp" video="images/publications/coenv.mp4" %}
<div class='paper-box-text' markdown="1">

**CoEnv: Driving Embodied Multi-Agent Collaboration via Compositional Environment**

Li Kang, Yutao Fan, **<u>Rui Li</u>**, Heng Zhou, Yiran Qin, Zhemeng Zhang, Songtao Huang, Xiufeng Song, Zaibin Zhang, Bruno N.Y. Chen, Zhenfei Yin, Dongzhan Zhou, Wangmeng Zuo, Lei Bai

**Preprint, 2026**

[ArXiv](https://arxiv.org/abs/2604.05484) \| [Website](https://faceong.github.io/CoEnv/)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/labrobfail.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**LabRobFail: A Benchmark for Robotic Failure Analysis in Chemical Self-driving Laboratory**

Haobo Wang\*, Baoli Sun\*, Anqi Zou, Dongsheng Huang, Zelin Lv, Ning Wang, **<u>Rui Li</u>**, Dongzhan Zhou, Weiyu Guo, Zhihui Wang, Wanli Ouyang

**Preprint, 2026 (Under Review)**

[ArXiv](https://arxiv.org/abs/2607.23704) \| [Code](https://github.com/Su-ISE-2001/SciRobo)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/labvla.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**LabVLA: Grounding Vision-Language-Action Models in Scientific Laboratories**

Baochang Ren, Xinjie Liu, Xi Chen, Yanshuo Liu, Chenxi Li, Daqi Gao, Zeqin Su, Jintao Xing, Zirui Xue, **<u>Rui Li</u>**, Xiangyu Zhao, Shuofei Qiao, Minting Pan, Wangmeng Zuo, Lei Bai, Dongzhan Zhou, Ningyu Zhang, Huajun Chen

**Preprint, 2026**

[ArXiv](https://arxiv.org/abs/2606.13578) \| [Website](https://zjunlp.github.io/LabVLA/)

</div>
</div>

<div class='paper-box'>
{% include paper-media.html name="MARS Challenge" badge="NeurIPS 2025 Workshop" alt="Three robot arms stacking cubes in RoboFactory, the MARS Challenge control-track benchmark" poster="images/publications/mars-challenge.webp" video="images/publications/mars-challenge.mp4" %}
<div class='paper-box-text' markdown="1">

**Advances and Innovations in the Multi-Agent Robotic System (MARS) Challenge**

Li Kang, Heng Zhou, Xiufeng Song, **<u>Rui Li</u>**, Bruno N. Y. Chen, Ziye Wang, Ximeng Meng, Stone Tao, Yiran Qin, et al.

**MARS Challenge @ NeurIPS 2025 Workshop on Space in Vision, Language, and Embodied AI**

[ArXiv](https://arxiv.org/abs/2601.18733) \| [Challenge](https://mars-eai.github.io/MARS-Challenge-Webpage/)

</div>
</div>

<div class='paper-box'>
{% include paper-media.html name="LabUtopia" badge="NeurIPS 2025" alt="LabUtopia simulated robot performing laboratory manipulation" poster="images/publications/labutopia.webp" video="images/publications/labutopia.mp4" %}
<div class='paper-box-text' markdown="1">

**LabUtopia: High-Fidelity Simulation and Hierarchical Benchmark for Scientific Embodied Agents**

**<u>Rui Li*</u>**, Zixuan Hu*, Wenxi Qu*, Jinouwen Zhang, Zhenfei Yin, Sha Zhang, Xuantuo Huang, Hanqing Wang, Tai Wang, Jiangmiao Pang, Wanli Ouyang, Lei Bai, Wangmeng Zuo, Ling-Yu Duan†, Dongzhan Zhou†, Shixiang Tang†

**NeurIPS 2025 Dataset and Benchmark Track**

[Paper](https://arxiv.org/abs/2505.22634) \| [Website](https://rui-li023.github.io/labutopia-site/) \| [Code](https://github.com/Rui-li023/LabUtopia) \| [Dataset](https://huggingface.co/datasets/Ruinwalker/LabUtopia-Dataset)

</div>
</div>

<div class='paper-box'>
{% include paper-media.html name="CFSSeg" badge="ACM MM 2025" alt="CFSSeg class-incremental semantic segmentation framework" poster="images/publications/cfsseg.webp" small="images/publications/cfsseg-400.webp" original="images/SegACIL.jpg" width="800" height="345" %}
<div class='paper-box-text' markdown="1">

**CFSSeg: Closed-Form Solution for Class-Incremental Semantic Segmentation of 2D Images and 3D Point Clouds**

Jiaxu Li*, **<u>Rui Li*</u>**, Jianyu Qi, Songning Lai, Linpu Lv, Kejia Fan, Jianheng Tang, Yutao Yue, Dongzhan Zhou, Yuanhuai Liu, Huiping Zhuang†

**ACM International Conference on Multimedia (ACM MM), 2025**

[ArXiv](https://arxiv.org/abs/2412.10834) \| [Code](https://github.com/qwrawq/SegACIL)

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/position-isl.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Position: Intelligent Science Laboratory Requires the Integration of Cognitive and Embodied AI**

Sha Zhang, Suorong Yang, Tong Xie, Xiangyuan Xue, Zixuan Hu, **<u>Rui Li</u>**, Wenxi Qu, Zhenfei Yin, Tianfan Fu, Di Hu, Andres M Bran, Nian Ran, Bram Hoex, Wangmeng Zuo, Philippe Schwaller, Wanli Ouyang, Lei Bai, Yanyong Zhang, Lingyu Duan, Shixiang Tang, Dongzhan Zhou

**Preprint, 2025**

[ArXiv](https://arxiv.org/abs/2506.19613)

</div>
</div>


<div class='paper-box'>
{% include paper-media.html name="AIDC" badge="ICASSP 2025" alt="AIDC analytical incremental disease classification framework" poster="images/publications/aidc.webp" small="images/publications/aidc-400.webp" original="images/ICASSP2025.png" width="800" height="268" %}
<div class='paper-box-text' markdown="1">

**AIDC: Benchmark for Analytical Learning in Incremental Disease Classification**

Rongchang Zhao, Jianyu Qi, **<u>Rui Li</u>**, Zhijie Zheng,Jian Zhang,Jiaxu Li†

**2025 IEEE International Conference on Acoustics, Speech, and Signal Processing**

[Paper](https://ieeexplore.ieee.org/document/10890364)

</div>
</div>


<div class='paper-box'>
{% include paper-media.html name="HFGS" badge="BIBM 2024" alt="HFGS high-frequency guided pseudo-CT synthesis framework" poster="images/publications/hfgs.webp" small="images/publications/hfgs-400.webp" original="images/BIBM2024.png" width="800" height="441" %}
<div class='paper-box-text' markdown="1">

**HFGS: High-Frequency Information Guided Net for Multi-Regions Pseudo-CT Synthesis**

Rongchang Zhao, Jianyu Qi, **<u>Rui Li</u>**, Teng Yang, Jiaxu Li, Jian Zhang, and Zijian Zhang†

**IEEE International Conference on Bioinformatics and Biomedicine (BIBM), 2024.**

[Paper](https://ieeexplore.ieee.org/document/10822547)

</div>
</div>
<!-- - [Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet](https://github.com), A, B, C, **CVPR 2020** -->

<!-- # 🎖 Honors and Awards
- *2021.10* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.09* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->

<!-- # 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)

# 💻 Internships
- *2019.05 - 2020.02*, [Lorem](https://github.com/), China. -->