import SettingsIcon from 'react-feather/dist/icons/settings';
import GitBranchIcon from 'react-feather/dist/icons/git-branch';
import ImageIcon from 'react-feather/dist/icons/image';
import FolderPlusIcon from 'react-feather/dist/icons/folder-plus';

export const categories = [
  { name: 'general', label: 'Get started', icon: SettingsIcon },
  { name: 'starter', label: 'Default Starters', icon: GitBranchIcon },
  { name: 'theme', label: 'Themes', icon: ImageIcon },
  { name: 'other', label: 'Everything else', icon: FolderPlusIcon },
];

export default categories;
