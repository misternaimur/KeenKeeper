/** @format */

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-4 text-sm text-slate-500 md:flex-row">
        <p>© {new Date().getFullYear()} KeenKeeper. All rights reserved.</p>
        <p>Built with Next.js, Tailwind CSS, and DaisyUI.</p>
      </div>
    </footer>
  );
};

export default Footer;
