import { useState } from 'react';

type Lang = 'en' | 'es';

export default function ResumeViewer() {
  const [lang, setLang] = useState<Lang>('en');
  const enHref = '/resume/en-thomas-smallwood.pdf';
  const esHref = '/resume/es-thomas-smallwood.pdf';
  const base = lang === 'en' ? enHref : esHref;
  // Many browsers honor these fragment params to hide default UI and fit width
  const viewerParams = '#view=FitH&zoom=page-width&toolbar=0&navpanes=0&scrollbar=1';
  const href = `${base}${viewerParams}`;

  return (
    <div className="pdf-viewer">
      <div className="pdf-toolbar">
        <div className="tabs" role="tablist" aria-label="Resume language">
          <button role="tab" aria-selected={lang==='en'} className={`tab ${lang==='en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
          <button role="tab" aria-selected={lang==='es'} className={`tab ${lang==='es' ? 'active' : ''}`} onClick={() => setLang('es')}>ES</button>
        </div>
        <div className="spacer" />
        <a className="button" href={base} target="_blank" rel="noopener">Open</a>
        <a className="button primary" href={base} download>Download</a>
      </div>
      <div className="pdf-frame pretty">
        <div className="pdf-chrome">
          <div className="pill">Resume · {lang.toUpperCase()}</div>
          <div className="spacer" />
          <div className="pill ghost">Fit to width</div>
        </div>
        <object data={href} type="application/pdf" width="100%" height="100%">
          <p className="small">Inline preview unavailable. Use Open or Download above.</p>
        </object>
      </div>
    </div>
  );
}
