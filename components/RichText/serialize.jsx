import React, { Fragment } from 'react';
import escapeHTML from 'escape-html';
import { Text } from 'slate';
import RichTextLink from './Link';
import { colors } from '@/styles/styles';
import classes from './styles.module.scss';
import typestyles from '../../styles/app.module.scss';

const serialize = (children) =>
  children?.map((node, i) => {
    if (Text.isText(node)) {
      let text = (
        <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />
      );

      if (node.bold) {
        text = <strong key={i}>{text}</strong>;
      }

      // custom styling for purple text
      if (node['rich-purple-text']) {
        text = <span style={{ color: colors.purple }}>{text}</span>;
      }

      // custom styling for dark purple text
      if (node['rich-dark-purple-text']) {
        text = <span style={{ color: colors.darkPurple }}>{text}</span>;
      }

      // custom styling for yellow text
      if (node['rich-yellow-text']) {
        text = <span style={{ color: colors.yellow }}>{text}</span>;
      }

      // custom styling for white text
      if (node['rich-white-text']) {
        text = <span style={{ color: colors.white }}>{text}</span>;
      }

      // custom styling for yellow headline text
      if (node['rich-yellow-headline']) {
        text = (
          <span
            style={{ color: colors.yellow }}
            className={`${typestyles.h1} ${classes.headline}`}
          >
            {text}
          </span>
        );
      }

      // custom styling for white headline text
      if (node['rich-white-headline']) {
        text = (
          <span
            style={{ color: colors.white }}
            className={`${typestyles.h1} ${classes.headline}`}
          >
            {text}
          </span>
        );
      }

      // custom styling for minimal yellow headline text
      if (node['rich-minimal-purple-text']) {
        text = (
          <span
            style={{ color: colors.purple }}
            className={`${typestyles.h1} ${classes.headline}`}
          >
            {text}
          </span>
        );
      }

      // custom styling for minimal white headline text
      if (node['rich-minimal-white-text']) {
        text = (
          <span
            style={{ color: colors.white }}
            className={`${typestyles.h1} ${classes.headline}`}
          >
            {text}
          </span>
        );
      }

      if (node.code) {
        text = <code key={i}>{text}</code>;
      }

      if (node.italic) {
        text = <em key={i}>{text}</em>;
      }

      if (node.underline) {
        text = (
          <span style={{ textDecoration: 'underline' }} key={i}>
            {text}
          </span>
        );
      }

      if (node.strikethrough) {
        text = (
          <span style={{ textDecoration: 'line-through' }} key={i}>
            {text}
          </span>
        );
      }

      return <Fragment key={i}>{text}</Fragment>;
    }

    if (!node) {
      return null;
    }

    switch (node.type) {
      case 'h1':
        return (
          <div key={i} className={typestyles.h1}>
            {serialize(node.children)}
          </div>
        );
      case 'h2':
        return (
          <div key={i} className={typestyles.h2}>
            {serialize(node.children)}
          </div>
        );
      case 'h3':
        return (
          <div key={i} className={typestyles.h3}>
            {serialize(node.children)}
          </div>
        );
      case 'h4':
        return (
          <div key={i} className={typestyles.h4}>
            {serialize(node.children)}
          </div>
        );
      case 'h5':
        return (
          <div key={i} className={typestyles.h5}>
            {serialize(node.children)}
          </div>
        );
      case 'h6':
        return (
          <div key={i} className={typestyles.h6}>
            {serialize(node.children)}
          </div>
        );
      case 'quote':
        return <blockquote key={i}>{serialize(node.children)}</blockquote>;
      case 'ul':
        return <ul key={i}>{serialize(node.children)}</ul>;
      case 'ol':
        return <ol key={i}>{serialize(node.children)}</ol>;
      case 'li':
        return <li key={i}>{serialize(node.children)}</li>;
      case 'link':
        return (
          <RichTextLink
            type={node.type}
            linkType={node.linkType}
            url={node?.url}
            newTab={node.newTab}
            doc={node?.doc}
          >
            {serialize(node.children)}
          </RichTextLink>
        );

      default:
        return (
          <div
            key={i}
            className={classes.paragraph}
          >
            {serialize(node.children)}
          </div>
        );
    }
  });

export default serialize;
