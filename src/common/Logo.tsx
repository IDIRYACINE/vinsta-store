
interface LogoProps {
    width?: string
    height?: string
    color?: string
    className?: string
}

export default function Logo(props: LogoProps) {

    const width = props.width ?? "50"
    const height = props.height ?? "50"
    const color = props.color ?? "#000000"

    return (
        <div className={props.className} dangerouslySetInnerHTML={{
            __html: `
            <?xml version="1.0" encoding="UTF-8" standalone="no"?>
            <svg
               viewBox="0 0 46.790002 62.53"
               version="1.1"
               id="svg30"
               sodipodi:docname="Asset 2.svg"
               width=${width}
               height=${height}
               inkscape:version="1.2.2 (732a01da63, 2022-12-09, custom)"
               xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
               xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
               xmlns="http://www.w3.org/2000/svg"
               xmlns:svg="http://www.w3.org/2000/svg">
              <sodipodi:namedview
                 id="namedview32"
                 pagecolor="#ffffff"
                 bordercolor="#000000"
                 borderopacity="0.25"
                 inkscape:showpageshadow="2"
                 inkscape:pageopacity="0.0"
                 inkscape:pagecheckerboard="0"
                 inkscape:deskcolor="#d1d1d1"
                 showgrid="false"
                 inkscape:zoom="1.5475614"
                 inkscape:cx="222.93139"
                 inkscape:cy="98.542134"
                 inkscape:window-width="1366"
                 inkscape:window-height="717"
                 inkscape:window-x="0"
                 inkscape:window-y="27"
                 inkscape:window-maximized="1"
                 inkscape:current-layer="Layer_1-2" />
              <defs
                 id="defs4">
                <style
                   id="style2">.cls-1{fill:${color};}</style>
              </defs>
              <g
                 id="Layer_2"
                 data-name="Layer 2">
                <g
                   id="Layer_1-2"
                   data-name="Layer 1">
                  <path
                     class="cls-1"
                     d="M 46.79,0 H 37.61 L 37.35,0.84 32,18.05 28,5.26 26.61,0.84 26.35,0 h -5.91 l -0.26,0.84 -1.38,4.42 -4,12.79 v 0 L 9.44,0.84 9.18,0 H 0 l 0.26,0.84 10,31.93 -9,28.92 L 1,62.53 h 9.19 l 0.26,-0.84 4.44,-14.21 4,12.79 0.71,2.26 h 7.77 l 0.63,-2.26 4,-12.79 4.44,14.21 0.26,0.84 h 9.18 l -0.26,-0.84 -9,-28.92 9.91,-31.93 z m -27.38,32.77 4,-12.8 4,12.8 v 0 l -4,12.79 z"
                     id="path26" />
                </g>
              </g>
            </svg>
            
      ` }} />
    );
}