import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Briefcase, 
  Box, 
  Lightbulb, 
  Mail, 
  ChevronRight,
  ArrowRight,
  Database,
  Cpu,
  Layers,
  Users,
  BookOpen,
  Settings,
  Shield,
  Globe,
  Zap,
  Star,
  Handshake,
  ChevronDown,
  ChevronUp,
  Check,
  X,
  AlertTriangle,
  HelpCircle,
  Phone,
  MapPin,
  ExternalLink,
  Menu
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const HiDimenQWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'mission',
        'capabilities',
        'technology',
        'cases',
        'reasons',
        'contact'
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const efficiencyData = [
    { name: '智能选品', efficiency: 60 },
    { name: '智能客服', efficiency: 40 },
    { name: '知识检索', efficiency: 80 },
    { name: '培训助手', efficiency: 50 },
  ];

  const caseData = [
    { name: '乳业巨头', value: 92, color: '#4a90e2' },
    { name: '设备企业', value: 95, color: '#50b89c' },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans overflow-x-hidden">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              高维探索 HiDimenQ
            </h1>
          </div>

          <div className="hidden md:flex space-x-6">
            {[
              { id: 'home', label: '首页' },
              { id: 'mission', label: '公司使命' },
              { id: 'capabilities', label: '核心能力' },
              { id: 'technology', label: '技术体系' },
              { id: 'cases', label: '成功案例' },
              { id: 'contact', label: '联系我们' },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`${
                  activeSection === item.id
                    ? 'text-blue-600 font-medium'
                    : 'text-gray-600 hover:text-blue-600'
                } transition-colors`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-gray-600 p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="container mx-auto px-4 py-2 flex flex-col">
                {[
                  { id: 'home', label: '首页' },
                  { id: 'mission', label: '公司使命' },
                  { id: 'capabilities', label: '核心能力' },
                  { id: 'technology', label: '技术体系' },
                  { id: 'cases', label: '成功案例' },
                  { id: 'contact', label: '联系我们' },
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`py-3 text-left ${
                      activeSection === item.id
                        ? 'text-blue-600 font-medium'
                        : 'text-gray-600'
                    } border-b border-gray-100 last:border-b-0`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        <section id="home" className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                让 AI 为企业创造实效
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                高维探索 - 中国企业级AI应用领域的创新引领者
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all flex items-center"
                  onClick={() => scrollToSection('mission')}
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  了解我们
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all flex items-center"
                  onClick={() => scrollToSection('contact')}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  联系我们
                </motion.button>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Briefcase,
                  title: "20+知名企业",
                  desc: "已为20+国内外知名企业提供深度定制化AI解决方案",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  icon: Cpu,
                  title: "全栈技术",
                  desc: "大模型为核，工具链为翼的全链路技术架构",
                  color: "from-purple-500 to-purple-600"
                },
                {
                  icon: Users,
                  title: "效果导向",
                  desc: "从效率提升到商业增长的全链路突破",
                  color: "from-indigo-500 to-indigo-600"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center mb-4`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="mission" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold">公司使命与定位</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl">
                在全球数字化浪潮加速的今天，人工智能已成为推动企业发展的核心驱动力
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-blue-50 rounded-xl p-8 border border-blue-100"
              >
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <Zap className="w-6 h-6 text-blue-600 mr-3" />
                  公司使命
                </h3>
                <p className="text-gray-700 mb-4">
                  <span className="font-medium">"让AI为企业创造实效"</span> - 通过整合前沿技术与行业经验，为企业提供定制化的AI解决方案，助力企业在激烈的市场竞争中脱颖而出。
                </p>
                <p className="text-gray-700">
                  我们深刻理解企业在数字化转型过程中面临的挑战和机遇，致力于成为您最值得信赖的AI战略合作伙伴。
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-purple-50 rounded-xl p-8 border border-purple-100"
              >
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <Globe className="w-6 h-6 text-purple-600 mr-3" />
                  公司定位
                </h3>
                <p className="text-gray-700 mb-4">
                  <span className="font-medium">不止是技术服务商，更是价值共创者</span> - 深耕企业级AI应用场景，拒绝"概念噱头"，坚持"效果导向"。
                </p>
                <p className="text-gray-700">
                  我们的愿景是<span className="font-medium">"让每一家企业以低成本享受AI红利"</span> - 将AI从"少数企业的奢侈品"转化为"所有企业的必需品"。
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="capabilities" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mr-4">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold">核心能力</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl">
                技术深度 × 场景广度，构建差异化竞争力
              </p>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              >
                <div className="flex justify-between items-center mb-6 cursor-pointer" onClick={() => toggleSection('team')}>
                  <h3 className="text-2xl font-semibold flex items-center">
                    <Users className="w-6 h-6 text-blue-600 mr-3" />
                    顶尖团队
                  </h3>
                  {expandedSections['team'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                </div>

                <AnimatePresence>
                  {expandedSections['team'] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-medium mb-3 text-blue-600">创始人</h4>
                          <p className="text-gray-700">
                            拥有10年+AI产品落地经验，曾任房天下AI产品负责人，主导百万级用户规模AI产品开发，深谙大模型训练、Agent/RAG技术在企业场景中的实战应用。
                          </p>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium mb-3 text-blue-600">技术负责人</h4>
                          <p className="text-gray-700">
                            原天音集团AI技术负责人，在自然语言处理、智能算法优化领域有深厚积累，带领团队突破多轮对话意图识别、知识库动态更新等关键技术瓶颈。
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              >
                <div className="flex justify-between items-center mb-6 cursor-pointer" onClick={() => toggleSection('solutions')}>
                  <h3 className="text-2xl font-semibold flex items-center">
                    <Layers className="w-6 h-6 text-purple-600 mr-3" />
                    全场景解决方案
                  </h3>
                  {expandedSections['solutions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                </div>

                <AnimatePresence>
                  {expandedSections['solutions'] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-8">
                        <div>
                          <h4 className="text-lg font-medium mb-3 flex items-center text-purple-600">
                            <Briefcase className="w-5 h-5 mr-2" />
                            企业级Agent产品：全链路数字化运营助手
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                              {
                                title: "智能选品与电商运营",
                                content: "基于大数据分析与AI预测，精准挖掘市场需求，新品上线周期缩短60%+"
                              },
                              {
                                title: "智能营销体系",
                                content: "批量生成社媒文案、SEO优化策略及广告素材，ROI提升40%+"
                              },
                              {
                                title: "智能客服与客户管理",
                                content: "7×24小时AI客服实时响应咨询、售后问题，增强客户粘性"
                              }
                            ].map((item, index) => (
                              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                <h5 className="font-medium mb-2">{item.title}</h5>
                                <p className="text-gray-600 text-sm">{item.content}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium mb-3 flex items-center text-purple-600">
                            <Database className="w-5 h-5 mr-2" />
                            企业内部AI服务：重塑组织效能的数字化引擎
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                              {
                                title: "企业AI知识库",
                                content: "整合多源数据构建智能知识库，信息检索效率提升80%"
                              },
                              {
                                title: "员工培训助手",
                                content: "基于岗位需求生成个性化培训方案，培训成本降低50%"
                              },
                              {
                                title: "行政与人事AI工具",
                                content: "自动化处理流程审批、数据报表、招聘筛选等事务性工作"
                              }
                            ].map((item, index) => (
                              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                <h5 className="font-medium mb-2">{item.title}</h5>
                                <p className="text-gray-600 text-sm">{item.content}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              >
                <div className="flex justify-between items-center mb-6 cursor-pointer" onClick={() => toggleSection('ecosystem')}>
                  <h3 className="text-2xl font-semibold flex items-center">
                    <Globe className="w-6 h-6 text-indigo-600 mr-3" />
                    开放生态合作
                  </h3>
                  {expandedSections['ecosystem'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                </div>

                <AnimatePresence>
                  {expandedSections['ecosystem'] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-700 mb-6">
                        我们与火山引擎、阿里云百炼、微软、Dify等顶级平台深度合作，构建"大模型 + 工具链 + 场景化应用"的全栈能力，支持模块化部署与定制化开发，适配不同行业需求。
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['火山引擎', '阿里云百炼', '微软', 'Dify'].map((partner, index) => (
                          <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-center justify-center h-20">
                            <span className="font-medium">{partner}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="technology" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center mr-4">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold">以 AI 技术深度赋能企业数智化转型</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl">
                构建"底层架构 - 核心技术 - 场景适配"三位一体的技术体系
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-blue-50 rounded-xl p-8 border border-blue-100 col-span-1 lg:col-span-3"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white mr-4">
                    <Settings className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-semibold">全栈式 AI 能力底座</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium mb-2 text-blue-600">基础设施层</h4>
                    <p className="text-gray-600 text-sm">
                      支持阿里云、火山引擎、微软 Azure、AWS 等国内外主流云平台，实现弹性算力扩展与本地化数据存储。
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium mb-2 text-blue-600">模型层</h4>
                    <p className="text-gray-600 text-sm">
                      整合 GPT 系列、通义千问、DeepSeek 等顶尖通用大模型，结合自研行业专属模型，形成混合架构。
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium mb-2 text-blue-600">应用技术层</h4>
                    <p className="text-gray-600 text-sm">
                      RAG 检索增强生成技术和智能体（Agent）技术，实现从数据处理到业务闭环的全链路支持。
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-md border border-gray-100"
              >
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <Shield className="w-6 h-6 text-purple-600 mr-3" />
                  三大技术护城河
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium mb-3 text-purple-600">1. 垂直专属模型训练</h4>
                    <p className="text-gray-700 mb-4">
                      通过三层递进式训练体系，解决通用模型"水土不服"问题：
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">领域强化（CPT 持续预训练）</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">精准校准（DPO 偏好优化）</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">灵活微调（SFT 多模式微调）</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-3 text-purple-600">2. 多模动态 RAG</h4>
                    <p className="text-gray-700">
                      构建实时更新的"智能知识库"，支持多格式兼容和分钟级更新。
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-3 text-purple-600">3. 多 Agent 协同技术</h4>
                    <p className="text-gray-700">
                      重塑自动化工作流，实现单Agent专精和多Agent协同。
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-md border border-gray-100"
              >
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <BookOpen className="w-6 h-6 text-indigo-600 mr-3" />
                  行业适配能力
                </h3>
                
                <p className="text-gray-700 mb-6">
                  我们拒绝"技术堆砌"，坚持"场景定义技术"，针对不同行业需求定制技术组合：
                </p>
                
                <div className="space-y-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-medium text-indigo-600 mb-2">跨境电商</h4>
                    <p className="text-gray-600 text-sm">
                      融合多语言NLP技术+动态汇率/物流数据API接入，新品测试周期从2周缩短至3天。
                    </p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-medium text-indigo-600 mb-2">制造业</h4>
                    <p className="text-gray-600 text-sm">
                      通过自研多模态大模型构建专家Agent，减少人工成本60%。
                    </p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-medium text-indigo-600 mb-2">零售快消</h4>
                    <p className="text-gray-600 text-sm">
                      利用消费者评论情感分析+营销素材生成模型，互动率提高25%。
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="cases" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mr-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold">实战验证</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl">
                标杆案例见证价值转化力
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-md border border-gray-100"
              >
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <div className="w-8 h-8 rounded-md bg-blue-100 flex items-center justify-center mr-3">
                    <Check className="w-5 h-5 text-blue-600" />
                  </div>
                  案例1：全球乳业巨头 —— 智能客服驱动售前服务升级
                </h3>
                
                <p className="text-gray-700 mb-6">
                  为该公司打造产品智能客服，覆盖产品咨询、试用申请、采购引导等全流程，24小时在线响应，回复准确率达92%。
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">750+</div>
                    <div className="text-sm text-gray-600">接待企业</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">40%</div>
                    <div className="text-sm text-gray-600">人工客服成本降低</div>
                  </div>
                </div>
                
                <div className="bg-gray-100 p-4 rounded-lg">
                  <img 
                    src="https://s.coze.cn/t/QLaxlecyd6Y/" 
                    alt="智能客服界面" 
                    className="w-full rounded-md"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-md border border-gray-100"
              >
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <div className="w-8 h-8 rounded-md bg-green-100 flex items-center justify-center mr-3">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  案例2：大型精密设备跨国企业 —— 工业质量解决方案Agent
                </h3>
                
                <p className="text-gray-700 mb-6">
                  整合工业质量领域专业知识库，构建"故障排查 + 服务推荐"智能体，支持多渠道触达，服务效率提升50%，客户满意度达95%。
                </p>
                
                <div className="h-64 mb-6">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={caseData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="name" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip />
                      <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="bg-gray-100 p-4 rounded-lg">
                  <img 
                    src="https://s.coze.cn/t/Ku92qtyGrOQ/" 
                    alt="Agent架构图" 
                    className="w-full rounded-md"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="reasons" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center mr-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold">选择高维探索的三大理由</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                我们不止提供技术，更交付增长答案
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Check,
                  title: "效果可量化",
                  description: "所有方案均以业务目标为导向，通过数据追踪与效果复盘，确保每一项AI投入都能转化为可见的效率提升或收入增长。",
                  color: "blue"
                },
                {
                  icon: Shield,
                  title: "服务全周期",
                  description: "从需求调研到落地迭代，提供专属配置，7×24小时响应机制，紧急问题0.5小时内答复，4小时现场支持。",
                  color: "purple"
                },
                {
                  icon: Handshake,
                  title: "长期价值伙伴",
                  description: "致力于成为企业的AI战略顾问，持续探索AI在业务中的创新应用，助力您在数智化转型中保持领先优势。",
                  color: "indigo"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-${item.color}-50 rounded-xl p-8 border border-${item.color}-100`}
                >
                  <div className={`w-12 h-12 rounded-lg bg-${item.color}-100 flex items-center justify-center mb-4`}>
                    <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 text-${item.color}-600`}>{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold">携手同行</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                让AI成为您的"增长新引擎"
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-md border border-gray-100 max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">联系我们</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center mr-4 mt-1">
                        <Mail className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">电子邮件</h4>
                        <p className="text-gray-600">zhoumeng@hidimenq.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center mr-4 mt-1">
                        <Phone className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">电话</h4>
                        <p className="text-gray-600">18631669206</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center mr-4 mt-1">
                        <MapPin className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">地址</h4>
                        <p className="text-gray-600">上海市嘉定区沪宜公路1185号1幢1层</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center mr-4 mt-1">
                        <ExternalLink className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">官网</h4>
                        <a href="http://www.hidimenq.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          www.hidimenq.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-6">在线留言</h3>
                  
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        姓名
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="请输入您的姓名"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        电子邮件
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="请输入您的电子邮件"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        留言内容
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="请输入您的留言内容"
                      ></textarea>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-3 rounded-lg hover:shadow-lg transition-all"
                    >
                      提交留言
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold">高维探索 HiDimenQ</span>
            </div>
            <div className="text-gray-500 text-sm text-center md:text-right">
              <p>© 2024 上海高维探索智能科技有限公司 版权所有</p>
              <p className="mt-1">
                created by{' '}
                <a
                  href="https://space.coze.cn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  coze space
                </a>{' '}
                | 页面内容均由 AI 生成，仅供参考
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HiDimenQWebsite;