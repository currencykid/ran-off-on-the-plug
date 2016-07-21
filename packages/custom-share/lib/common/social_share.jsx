import React, { PropTypes, Component } from 'react';

class SocialShare extends Component {

	constructor() {
		super();
		this.toggleView = this.toggleView.bind(this);
		this.state = {
			showShare: false
		}
	}

	viaTwitter() {
		return !!Telescope.settings.get('twitterAccount') ? 'via='+Telescope.settings.get('twitterAccount') : '';
	}

	toggleView() {
		this.setState({
			showShare: !this.state.showShare
		});
		return;
	}

	insertIcon(name) {
		return {__html: Telescope.utils.getIcon(name)};
	}

	render() {
		let shareDisplay = this.state.showShare ? 'active' : 'hidden';
		let shareUrl = "http://localhost:3000" + this.props.url;
		return (
			<div className="social-share">
        {/*<a className="share-link action" title="share" onClick={ this.toggleView } dangerouslySetInnerHTML={ this.insertIcon('sliders')}/>*/} 
        <a className="share-link action" title="share" onClick={ this.toggleView }> Share </a>
				<div className={ `share-options ${shareDisplay}` }>

          <a className="share-option-facebook" href={ `https://www.facebook.com/sharer/sharer.php?u=${ encodeURIComponent(shareUrl) }`} target="_blank" dangerouslySetInnerHTML={ this.insertIcon('facebook')} />
					<a className="share-option-twitter" href={ `//twitter.com/intent/tweet?text=${ encodeURIComponent(shareUrl) }`} target="_blank" dangerouslySetInnerHTML={ this.insertIcon('twitter')}/>
				</div>

			</div>
		)
	}
}

SocialShare.propTypes = {
	url: React.PropTypes.string.isRequired,
	title: React.PropTypes.string.isRequired,
}

module.exports = SocialShare;
