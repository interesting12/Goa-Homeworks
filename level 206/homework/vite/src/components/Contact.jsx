function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto p-10 text-center">
      <h2 className="text-4xl font-bold mb-8">
        Contact Me
      </h2>

      <div className="flex justify-center gap-6">
        <a
          href="https://github.com"
          className="bg-slate-900 px-6 py-3 rounded-xl hover:bg-blue-600 duration-300"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com"
          className="bg-slate-900 px-6 py-3 rounded-xl hover:bg-blue-600 duration-300"
        >
          LinkedIn
        </a>

        <a
          href="https://facebook.com"
          className="bg-slate-900 px-6 py-3 rounded-xl hover:bg-blue-600 duration-300"
        >
          Facebook
        </a>
      </div>
    </section>
  );
}

export default Contact;