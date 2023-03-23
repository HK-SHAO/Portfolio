import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'

import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({...form, [name]: value})
  }
  // template_z14otnl
  // service_8jx00rt
  // wGFc7c9al9D5fLZVz
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs
    .send(
      'service_8jx00rt', 
      'template_z14otnl', 
      {
        from_name:form.name, 
        to_name:'Cuctut', 
        from_email:form.email, 
        to_email:'2393300434@qq.com',
        message: form.message
      },
      'wGFc7c9al9D5fLZVz'
    )
    .then(() => {
      setLoading(false)
      alert('我已收到您的邮件，相信我们很快能够相遇！')
      setForm({
        name: '',
        email: '',
        message: ''
      })
    }, (error) => {
      setLoading(false)
      console.log(error)
      alert('出了一些小差错，麻烦通过其他渠道联系我吧')
    })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
       variants={slideIn('left', "tween", 0.2, 1)}
       className="flex-[0.75] bg-gradient-to-b from-[#100d25] to-[#4e4376] p-8 rounded-2xl"
      > 
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>想取得联系吗？</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white mb-4 font-mono tracking-wide">👨‍🚀 您的名字</span>
            <input type="text" name="name" value={form.name} 
              onChange={handleChange} placeholder="What's your name?" 
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-mono tracking-wide mb-4">📧 您的Email</span>
            <input type="email" name="email" value={form.email} 
              onChange={handleChange} placeholder="What's your email?" 
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-mono tracking-wide mb-4">💡 您的想法</span>
            <textarea rows={7} name="message" value={form.message} 
              onChange={handleChange} placeholder="What do you think?" 
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
    
          <button type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
            {loading ? 'Nice!!' : '发送'}
          </button>
        </form>

      </motion.div>

      <motion.div
       variants={slideIn('right', "tween", 0.2, 1)}
       className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")