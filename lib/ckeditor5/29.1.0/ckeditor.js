/*!
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */


// fa lang
(function(e){const t=e["fa"]=e["fa"]||{};t.dictionary=Object.assign(t.dictionary||{},{"%0 of %1":"0% از 1%","Align center":"تراز وسط","Align left":"تراز چپ","Align right":"تراز راست",Aquamarine:"زمرد کبود",Big:"بزرگ",Black:"سیاه","Block quote":" بلوک نقل قول",Blue:"آبی",Bold:"درشت","Break text":"","Bulleted List":"لیست نشانه‌دار",Cancel:"لغو","Cannot upload file:":"فایل آپلود نمی‌شود:","Centered image":"تصویر در وسط","Change image text alternative":"تغییر متن جایگزین تصویر","Characters: %0":"تعداد حروف : 0%","Choose heading":"انتخاب عنوان",Code:"کد",Column:"ستون","Decrease indent":"کاهش تورفتگی",Default:"پیش فرض","Delete column":"حذف ستون","Delete row":"حذف سطر","Dim grey":"خاکستری تیره","Document colors":"رنگ اسناد",Downloadable:"قابل بارگیری","Dropdown toolbar":"نوارابزار کشویی","Edit block":"ویرایش قطعه","Edit link":"ویرایش پیوند","Editor toolbar":"نوارابزار ویرایشگر","Enter image caption":"عنوان تصویر را وارد کنید","Font Background Color":"رنگ پس زمینه فونت","Font Color":"رنگ فونت","Font Family":"خانواده فونت","Font Size":"اندازه فونت","Full size image":"تصویر در اندازه کامل",Green:"سبز",Grey:"خاکستری","Header column":"ستون سربرگ","Header row":"سطر سربرگ",Heading:"عنوان","Heading 1":"عنوان 1","Heading 2":"عنوان 2","Heading 3":"عنوان 3","Heading 4":"عنوان 4","Heading 5":"عنوان 5","Heading 6":"عنوان 6",Huge:"بسیار بزرگ","Image resize list":"","Image toolbar":"نوارابزار تصویر","image widget":"ابزاره تصویر","In line":"","Increase indent":"افزایش تورفتگی","Insert code block":"درج بلوک کد","Insert column left":"درج ستون در سمت چپ","Insert column right":"درج ستون در سمت راست","Insert image":"قرار دادن تصویر","Insert media":"وارد کردن رسانه","Insert paragraph after block":"درج پاراگراف بعد از بلوک","Insert paragraph before block":"درج پاراگراف قبل از بلوک","Insert row above":"درج سطر در بالا","Insert row below":"درج سطر در پایین","Insert table":"درج جدول",Italic:"کج",Justify:"هم تراز کردن","Left aligned image":"تصویر تراز شده چپ","Light blue":"آبی روشن","Light green":"سبز روشن","Light grey":"خاکستری روشن",Link:"پیوند","Link image":"اتصال پیوند به تصویر","Link URL":"نشانی اینترنتی پیوند","Media URL":"آدرس اینترنتی رسانه","media widget":"ویجت رسانه","Merge cell down":"ادغام سلول پایین","Merge cell left":"ادغام سلول چپ","Merge cell right":"ادغام سلول راست","Merge cell up":"ادغام سلول بالا","Merge cells":"ادغام سلول ها",Next:"بعدی","Numbered List":"لیست عددی","Open in a new tab":"بازکردن در برگه جدید","Open link in new tab":"باز کردن پیوند در برگه جدید",Orange:"نارنجی",Original:"",Paragraph:"پاراگراف","Paste the media URL in the input.":"آدرس رسانه را در ورودی قرار دهید","Plain text":"متن ساده",Previous:"قبلی",Purple:"بنفش",Red:"قرمز",Redo:"باز انجام","Remove color":"حذف رنگ","Resize image":"","Resize image to %0":"","Resize image to the original size":"","Rich Text Editor":"ویرایشگر متن غنی","Rich Text Editor, %0":"ویرایشگر متن غنی، %0","Right aligned image":"تصویر تراز شده راست",Row:"سطر",Save:"ذخیره","Select all":"انتخاب همه","Select column":"","Select row":"","Show more items":"نمایش گزینه‌های بیشتر","Side image":"تصویر جانبی",Small:"کوچک","Split cell horizontally":"تقسیم افقی سلول","Split cell vertically":"تقسیم عمودی سلول","Table toolbar":"نوارابزار جدول","Text alignment":"تراز متن","Text alignment toolbar":"نوار ابزار ترازبندی متن","Text alternative":"متن جایگزین","The URL must not be empty.":"آدرس اینترنتی URL نباید خالی باشد.","This link has no URL":"این پیوند نشانی اینترنتی ندارد","This media URL is not supported.":"این آدرس اینترنتی رسانه پشتیبانی نمی‌شود",Tiny:"بسیار کوچک","Tip: Paste the URL into the content to embed faster.":"نکته : آدرس را در محتوا قراردهید تا سریع تر جاسازی شود","To-do List":"لیست انجام کار","Toggle caption off":"","Toggle caption on":"",Turquoise:"فیروزه ای",Undo:"بازگردانی",Unlink:"لغو پیوند","Upload failed":"آپلود ناموفق بود","Upload in progress":"آپلود در حال انجام",White:"سفید","Widget toolbar":"نوار ابزار ویجت","Words: %0":"تعداد لغات : 0%","Wrap text":"",Yellow:"زرد"});t.getPluralForm=function(e){return e>1}})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));


function runEditor()
{
  if(window.pushStateResult && window.pushStateResult.live && parseInt(window.pushStateResult.live) === 1)
  {
    // skip on live mode
    return null;
  }

  // var editor = new MediumEditor('[data-editor]');
  $('[data-editor]').each(function(_el)
  {
    $this = $(this);
    if($this.attr('data-editor') === 'simple')
    {
      editorSimpleRunner($this);
    }
    else
    {
      editorRunner($this);
    }
  });
}


function editorRunner(_el)
{
  var myLang = urlLang();
  var myEl = _el.get(0);

  ClassicEditor.create( myEl,
  {
    //plugins: [ Autoformat, CodeBlock ],
    toolbar:
    {
      items:
      [
        'heading',
        'codeBlock',
        '|',
        'fontSize',
        'fontColor',
        'fontBackgroundColor',
        '|',
        'bold',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        '|',
        'indent',
        'outdent',
        '|',
        'alignment',
        'imageUpload',
        'blockQuote',
        // 'codeBlock',
        'insertTable',
        // 'mediaEmbed',
        'undo',
        'redo'
      ]
    },
    language: myLang,
    image: {
      toolbar: [
        'imageTextAlternative',
        'imageStyle:inline',
        'imageStyle:block',
        'imageStyle:side',
        'linkImage'
      ]
    },
    fontSize: {
        options: [
            10,
            12,
            14,
            16,
            18,
            20,
            28,
            36,
            48,
            72,
        ]
    },
    heading: {
      options: [
        { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
        { model: 'heading1', view: 'h2', title: 'Heading 1', class: 'ck-heading_heading1' },
        { model: 'heading2', view: 'h3', title: 'Heading 2', class: 'ck-heading_heading2' },
        { model: 'heading3', view: 'h4', title: 'Heading 3', class: 'ck-heading_heading3' },
        { model: 'pre', view: 'pre', title: 'Code Block', class: 'ck-pre' },
        // { model: 'msgInfo', view: { name: 'p', classes: 'msg info2'}, title: 'Msg Info', class: 'ck-msg-info', converterPriority: 'high' },
        // { model: 'msgSuccess', view: { name: 'p', classes: 'msg success2'}, title: 'Msg Success', class: 'ck-msg-success', converterPriority: 'high' },
        // { model: 'msgWarn', view: { name: 'p', classes: 'msg warn2'}, title: 'Msg Warn', class: 'ck-msg-warn', converterPriority: 'high' },
        // { model: 'msgDanger', view: { name: 'p', classes: 'msg danger2'}, title: 'Msg Danger', class: 'ck-msg-danger', converterPriority: 'high' },
      ]
    },
    codeBlock: {
        languages: [
            // Do not render the CSS class for the plain text code blocks.
            { language: 'plaintext', label: 'Plain text', class: '' },
            { language: 'css', label: 'CSS' },
            { language: 'html', label: 'HTML' },

            // Use the "php-code" class for PHP code blocks.
            { language: 'php', label: 'PHP', class: 'php-code' },

            // Use the "js" class for JavaScript code blocks.
            // Note that only the first ("js") class will determine the language of the block when loading data.
            { language: 'javascript', label: 'JavaScript', class: 'js javascript js-code' },

            // Python code blocks will have the default "language-python" CSS class.
            { language: 'python', label: 'Python' },
            { language: 'rust', label: 'Rust' },
        ]
    },
    // allowedContent: 'p(msg)',
    link: {
      // Automatically add target="_blank" and rel="noopener noreferrer" to all external links.
      addTargetToExternalLinks: true,
      decorators: {
          detectDownloadable: {
              mode: 'automatic',
              callback: url => url.endsWith( '.pdf' ),
              attributes: {
                  download: 'file.pdf'
              }
          },
          // toggleDownloadable: {
          //     mode: 'manual',
          //     label: 'Downloadable',
          //     attributes: {
          //         download: 'file'
          //     }
          // },
          // openInNewTab: {
          //     mode: 'manual',
          //     label: 'Open in a new tab',
          //     defaultValue: true,      // This option will be selected by default.
          //     attributes: {
          //         target: '_blank',
          //         rel: 'noopener noreferrer'
          //     }
          // }
      }
    },
    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells'
      ]
    },
    ckfinder: {
        // Upload the images to the server using the CKFinder QuickUpload command.
        uploadUrl: window.location.href,
        options: {
            resourceType: 'Images'
        },
    },
    licenseKey: '',

  } )
  .then( editor => {
    window.editor = editor;
  } )
  .catch( error => {
    console.error( 'Oops, something gone wrong for editor!' );
    console.error( error );
  } );

}


function editorSimpleRunner(_el)
{
  var myLang = urlLang();
  var myEl = _el.get(0);
  ClassicEditor.create( myEl,
  {

    toolbar: {
      items: [
        'bold',
        // 'italic',
        'link',
      ]
    },
    language: myLang,
    link: {
            // Automatically add target="_blank" and rel="noopener noreferrer" to all external links.
            addTargetToExternalLinks: true,
            decorators: {
                detectDownloadable: {
                    mode: 'automatic',
                    callback: url => url.endsWith( '.pdf' ),
                    attributes: {
                        download: 'file.pdf'
                    }
                },
            }
        },
    licenseKey: '',

  } )
  .then( editor => {
    window.editor = editor;
  } )
  .catch( error => {
    console.error( 'Oops, something gone wrong for editor!' );
    console.error( error );
  } );

}
