selector_to_html = {"a[href=\"chap11.html#section-debugging-11\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">11.9. </span>Dadnamu<a class=\"headerlink\" href=\"#dadnamu\" title=\"Link to this heading\">#</a></h2><p>Mae rhestri, geiriaduron, a th\u0175pls yn <strong><a class=\"reference internal\" href=\"../glossary.html#term-strwythur-data\"><span class=\"xref std std-term\">strwythur data</span></a></strong>. Yn y\nbennod hon rydym yn dechrau gweld strwythurau data cyfansawdd, fel rhestri\no d\u0175pls, neu eiriaduron sy\u2019n cynnwys t\u0175pls fel allweddi a rhestri fel\ngwerthoedd. Mae strwythurau data cyfansawdd yn ddefnyddiol, ond maent yn\ndueddol o achosi gwallau pan fydd strwythur data o\u2019r math, maint, neu\nstrwythur anghywir. Er enghraifft, os yw swyddogaeth yn disgwyl rhestr o\ngyfanrifau a chi\u2019n rhoi cyfanrif plaen iddi (nid mewn rhestr), mae\u2019n debygol\nna fydd yn gweithio.</p><p>I helpu dadnamu\u2019r mathau hyn o wallau, ysgrifennais fodiwl o\u2019r enw\n<code class=\"docutils literal notranslate\"><span class=\"pre\">structshape</span></code> sy\u2019n darparu swyddogaeth, a elwir hefyd yn <code class=\"docutils literal notranslate\"><span class=\"pre\">structshape</span></code>, sy\u2019n\ncymryd unrhyw fath o strwythur data fel dadl ac yn dychwelyd llinyn sy\u2019n\ncrynhoi ei strwythur. Gallwch ei lawrlwytho o\n<a class=\"reference external\" href=\"https://raw.githubusercontent.com/AllenDowney/ThinkPython/v3/structshape.py\">https://raw.githubusercontent.com/AllenDowney/ThinkPython/v3/structshape.py</a>.</p>", "a[href=\"#meddyliau-terfynol\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">19. </span>Meddyliau Terfynol<a class=\"headerlink\" href=\"#meddyliau-terfynol\" title=\"Link to this heading\">#</a></h1><p>Nid yw dysgu rhaglennu\u2019n hawdd, ond os ydych wedi cyrraedd cyn belled \u00e2 hyn, rydych\nwedi dechrau\u2019n dda. Nawr mae gennyf rai awgrymiadau ar gyfer ffyrdd y gallwch barhau\ni ddysgu a chymhwyso\u2019r hyn rydych wedi\u2019i ddysgu.</p><p>Bwriad y llyfr hwn yw bod yn gyflwyniad cyffredinol i raglennu, felly nid ydym wedi\ncanolbwyntio ar gymwysiadau penodol. Yn dibynnu ar eich diddordebau, mae unrhyw nifer\no feysydd lle gallwch gymhwyso\u2019ch sgiliau newydd.</p>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(` ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'auto-start', maxWidth: 500, interactive: false,

            });
        };
    };
    console.log("tippy tips loaded!");
};
