import React, { PropTypes, Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { ListContainer } from "meteor/utilities:react-list-container";
import Posts from "meteor/nova:posts";
import Users from 'meteor/nova:users';
import { Link } from 'react-router';

const UsersProfile = ({user, currentUser}) => {

  const twitterName = Users.getTwitterName(user);

  const terms = {view:"userPosts", userId: user._id};
  const {selector, options} = Posts.parameters.get(terms);

  return (
    <div className="page users-profile">
      <Telescope.components.HeadTags url={Users.getProfileUrl(user, true)} title={Users.getDisplayName(user)} description={user.telescope.bio} />
      <h2 className="page-title">{Users.getDisplayName(user)}</h2>
      <p>{user.telescope.bio}</p>
      <ul className="user-info">
        <p><i className="fa fa-plug karma-icon" aria-hidden="true"></i>&nbsp;&nbsp;{user.telescope.karma}</p>
        {twitterName ? <li><a href={"http://twitter.com/" + twitterName}><i className="fa fa-twitter twitter-user-icon" aria-hidden="true"></i>@{twitterName}</a></li> : null }
        {/* {user.telescope.website ? <li><a href={user.telescope.website}>{user.telescope.website}</a></li> : null } */}
        {Users.is.admin(currentUser) ? <li><Link to={Users.getEditUrl(user)}><FormattedMessage id="users.edit_account"/></Link></li> : null}
      </ul>
      <h3><FormattedMessage id="users.posts"/></h3>
      <ListContainer
        collection={Posts}
        publication="posts.list"
        terms={terms}
        selector={selector}
        options={options}
        joins={Posts.getJoins()}
        cacheSubscription={false}
        component={Telescope.components.PostsList}
        componentProps={{showHeader: false}}
        listId="posts.list.user"
      />
    </div>
  )
}

UsersProfile.propTypes = {
  user: React.PropTypes.object.isRequired,
  currentUser: React.PropTypes.object
}

UsersProfile.displayName = "UsersProfile";

module.exports = UsersProfile;
