import React, {useMemo} from "react";
import {Editor, EditorContent, useEditor} from "@tiptap/react";
import {Paragraph} from "@tiptap/extension-paragraph";
import {Text} from "@tiptap/extension-text";
import {Document} from "@tiptap/extension-document";
import {Box, IconButton} from "@mui/material";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import {StarterKit} from "@tiptap/starter-kit";
import {Underline} from "@tiptap/extension-underline";
import {TextAlign} from "@tiptap/extension-text-align";


const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nunc urna, porttitor ut justo a, efficitur semper lectus. Duis vitae purus elementum, sollicitudin lectus aliquam, mollis lectus. Donec consequat neque metus, ut bibendum libero dictum et. Maecenas urna lectus, dapibus non tincidunt sed, efficitur sit amet sapien. Aenean et ex mollis odio semper auctor sit amet id dolor. Ut fringilla mi vitae felis maximus, eu semper libero varius. Quisque vitae lacus ac turpis tristique sollicitudin. Pellentesque sapien tellus, blandit id dapibus efficitur, varius at ipsum. Integer vitae vehicula diam, quis hendrerit purus. In congue, purus quis semper pharetra, leo augue tincidunt turpis, non gravida lorem enim vitae lorem. Maecenas ornare odio ac ligula maximus feugiat. Sed non diam id diam aliquet condimentum. Nunc ut odio quis turpis mollis cursus a porta ex. Integer fringilla lobortis odio at sagittis. Suspendisse facilisis, nisl sed viverra pretium, est neque gravida felis, eget bibendum libero ligula vitae eros. Integer in felis vel augue eleifend egestas et mollis ligula.\n" +
  "\n" +
  "Pellentesque ac nibh et lacus vehicula porta. Quisque dignissim, arcu quis tincidunt sollicitudin, est enim pulvinar mi, eget posuere velit eros nec libero. Morbi elementum neque ut leo porttitor vehicula. Suspendisse suscipit nisl vel ligula eleifend posuere. Quisque tristique egestas faucibus. Etiam vel velit vitae metus fringilla consectetur. Nullam ex lacus, rutrum quis blandit et, eleifend et dolor. Maecenas pharetra ornare aliquam. Praesent vulputate velit vitae dapibus lacinia. Pellentesque condimentum ut mauris at sagittis. Duis sollicitudin lorem faucibus est ultrices, non euismod metus posuere.\n"

const MenuBar = ({editor}: { editor: Editor | null }) => {
  const menuItems = useMemo(() => {
    return (
      [
        {
          name: "bold",
          command: () => editor?.chain().focus().toggleBold().run(),
          icon: <FormatBoldIcon/>
        },
        {
          name: "italic",
          command: () => editor?.chain().focus().toggleItalic().run(),
          icon: <FormatItalicIcon/>
        },
        {
          name: "underline",
          command: () => editor?.chain().focus().toggleUnderline().run(),
          icon: <FormatUnderlinedIcon/>
        },
        {
          name: "bullet_list",
          command: () => editor?.chain().focus().toggleBulletList().run(),
          icon: <FormatListBulletedIcon/>
        },
        {
          name: "ordered_list",
          command: () => editor?.chain().focus().toggleOrderedList().run(),
          icon: <FormatListNumberedIcon/>
        },
        {
          name: "align_left",
          command: () => editor?.chain().focus().setTextAlign("left").run(),
          icon: <FormatAlignLeftIcon/>
        },
        {
          name: "align_center",
          command: () => editor?.chain().focus().setTextAlign("center").run(),
          icon: <FormatAlignCenterIcon/>
        },
        {
          name: "align_right",
          command: () => editor?.chain().focus().setTextAlign("right").run(),
          icon: <FormatAlignRightIcon/>
        },
        {
          name: "align_justify",
          command: () => editor?.chain().focus().setTextAlign("justify").run(),
          icon: <FormatAlignJustifyIcon/>
        }
      ]
    )
  }, [editor])

  return (
    <Box sx={{borderTop: "black 2px solid", borderBottom: "black 2px solid"}} py={"0.5rem"} pl={"2rem"}>
      {menuItems.map((item, index) => (
        <IconButton key={index} onClick={item.command} color={"primary"}>
          {item.icon}
        </IconButton>
      ))}
    </Box>
  )
}

interface Props {
  onChange: (content: string) => void
}

const EditorContainer = ({onChange}: Props) => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: loremIpsum,
    autofocus: true,
    editable: true,
    injectCSS: true,
    onUpdate: ({editor}) => onChange(editor.getHTML())
  })
  
  return (
    <Box>
      <MenuBar editor={editor}/>
      <Box mt={"1rem"} mx={"2rem"}>
        <EditorContent editor={editor}/>
      </Box>

    </Box>
  )

}


export default EditorContainer;