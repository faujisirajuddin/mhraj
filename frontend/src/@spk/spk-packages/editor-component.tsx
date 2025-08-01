import React, { Fragment, useRef } from "react";
import SunEditor from "suneditor-react";
import SunEditorCore from "suneditor/src/lib/core";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

interface SunEditorOptions {
  buttonList?: string[][]; // Add buttonList to the options interface
  defaultTag?: string;
  minHeight?: string;
  showPathLabel?: boolean;
  font?: string[];
  defaultStyle?: string;
  // You can add any other options supported by the SunEditor
}

interface SunEditorProps {
  width?: string | any;
  height?: string | any;
  placeholder?: string;
  autofocus?: boolean;
  setplugin?: boolean;
  setcontent?: string;
  appendcontent?: string;
  defaultstyle?: string;
  disable?: boolean;
  hide?: boolean;
  hidetoolbar?: boolean;
  disabletoolbar?: boolean;
  onLoad?: string;
  defaulContent?: string;
  onScroll?: (event: UIEvent) => void;
  onClick?: (event: MouseEvent) => void;
  // Updated onCopy handler type
  onCopy?: (
    event: ClipboardEvent,
    clipboardData: DataTransfer | null
  ) => boolean; // Adjusted type
  onCut?: (
    event: ClipboardEvent,
    clipboardData: DataTransfer | null
  ) => boolean; // Si
  setoptions?: SunEditorOptions;
  name?: string;
  value?: string;
  onChange?: (name: string, value: string) => void;
  error?: string;
}

const SunEditorComponent: React.FC<SunEditorProps> = ({
  name = "editor",
  value = "",
  onChange,
  error = "",
  width,
  height,
  placeholder,
  autofocus,
  setplugin,
  setcontent,
  appendcontent,
  defaultstyle,
  disable,
  hide,
  hidetoolbar,
  disabletoolbar,
  defaulContent,
  setoptions,
}) => {
  const editor = useRef<SunEditorCore>();

  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const getSunEditorInstance = (sunEditor: SunEditorCore) => {
    editor.current = sunEditor;
  };

  const handleChange = (content: string) => {
    console.log("Content changed:", content);
    if (onChange) {
      onChange(name, content);
    }
  };

  const handleScroll = (event: UIEvent) => {
    console.log("Scroll event:", event);
  };

  const handleClick = (event: MouseEvent) => {
    console.log("Click event:", event);
  };

  const handleMouseDown = (event: MouseEvent) => {
    console.log("Mouse down event:", event);
  };

  const handleInput = (event: any) => {
    console.log("Input event:", event);
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    console.log("Key up event:", event);
  };

  const handleFocus = (event: FocusEvent) => {
    console.log("Focus event:", event);
  };

  const handleBlur = (event: FocusEvent, editorContents: string) => {
    console.log("Blur event:", event, editorContents);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    console.log("Key down event:", event);
  };

  const handleDrop = (event: DragEvent) => {
    console.log("Drop event:", event);
  };

  const handleImageUploadBefore = (data: any) => {
    console.log("Image upload before:", data);
    return true;
  };

  const handleImageUpload = (data: any) => {
    console.log("Image upload:", data);
  };

  const handleImageUploadError = (data: any) => {
    console.log("Image upload error:", data);
  };

  const handleVideoUploadBefore = (data: any) => {
    console.log("Video upload before:", data);
    return true;
  };

  const handleVideoUpload = (data: any) => {
    console.log("Video upload:", data);
  };

  const handleVideoUploadError = (data: any) => {
    console.log("Video upload error:", data);
  };

  const handleAudioUploadBefore = (data: any) => {
    console.log("Audio upload before:", data);
    return true;
  };

  const handleAudioUpload = (data: any) => {
    console.log("Audio upload:", data);
  };

  const handleAudioUploadError = (data: any) => {
    console.log("Audio upload error:", data);
  };

  const handleResizeEditor = (data: any) => {
    console.log("Editor resized:", data);
  };

  // const handleCopy = (data:{ range: Range }) => {
  //   console.log("Copy event:", data);
  // };

  // const handleCut = (data: { range: Range }) => {
  //   console.log("Cut event:", data);
  // };
  const handleCopy = (
    event: ClipboardEvent,
    clipboardData: DataTransfer | null
  ): boolean => {
    console.log("Copy event:", event, clipboardData);
    // Return true or false based on your logic
    return true; // or false if you want to prevent the default action
  };

  const handleCut = (
    event: ClipboardEvent,
    clipboardData: DataTransfer | null
  ): boolean => {
    console.log("Cut event:", event, clipboardData);
    // Return true or false based on your logic
    return true; // or false if you want to prevent the default action
  };

  const handlePaste = (data: any) => {
    console.log("Paste event:", data);
  };

  const imageUploadHandler = (data: any) => {
    console.log("Image upload handler:", data);
  };

  const toggleCodeView = (data: any) => {
    console.log("Toggle code view:", data);
  };

  const toggleFullScreen = (data: any) => {
    console.log("Toggle full screen:", data);
  };

  const showInline = (data: any) => {
    console.log("Show inline:", data);
  };

  const showController = (data: any) => {
    console.log("Show controller:", data);
  };

  const editorOptions: SunEditorOptions = {
    ...setoptions, // Merge setoptions provided through props
    // Override height if provided directly
  };

  return (
    <Fragment>
      <SunEditor
        setOptions={editorOptions}
        getSunEditorInstance={getSunEditorInstance}
        width={width}
        height={height}
        placeholder={placeholder}
        autoFocus={autofocus}
        setAllPlugins={setplugin}
        setContents={value}
        appendContents={appendcontent}
        setDefaultStyle={defaultstyle}
        disable={disable}
        hide={hide}
        hideToolbar={hidetoolbar}
        disableToolbar={disabletoolbar}
        defaultValue={defaulContent}
        onChange={handleChange}
        onScroll={handleScroll}
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        onInput={handleInput}
        onKeyUp={handleKeyUp}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onDrop={handleDrop}
        onImageUploadBefore={handleImageUploadBefore}
        onImageUpload={handleImageUpload}
        onImageUploadError={handleImageUploadError}
        onVideoUploadBefore={handleVideoUploadBefore}
        onVideoUpload={handleVideoUpload}
        onVideoUploadError={handleVideoUploadError}
        onAudioUploadBefore={handleAudioUploadBefore}
        onAudioUpload={handleAudioUpload}
        onAudioUploadError={handleAudioUploadError}
        onResizeEditor={handleResizeEditor}
        onCopy={handleCopy}
        onCut={handleCut}
        onPaste={handlePaste}
        imageUploadHandler={imageUploadHandler}
        toggleCodeView={toggleCodeView}
        toggleFullScreen={toggleFullScreen}
        showInline={showInline}
        showController={showController}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </Fragment>
  );
};

export default SunEditorComponent;
